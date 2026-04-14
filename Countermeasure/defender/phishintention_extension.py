import argparse
import os
import re
import time
from datetime import datetime

import cv2
import torch
from configs import load_config
from modules.awl_detector import find_element_type, pred_rcnn, vis
from modules.crp_classifier import credential_classifier_mixed, html_heuristic
from modules.crp_locator import crp_locator
from modules.logo_matching import check_domain_brand_inconsistency
from tqdm import tqdm
from utils.web_utils import driver_loader

# from memory_profiler import profile

os.environ["KMP_DUPLICATE_LIB_OK"] = "True"


class PhishIntentionWrapper:
    _caller_prefix = "PhishIntentionWrapper"
    _DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

    def __init__(self):
        self._load_config()

    def _load_config(self):
        (
            self.AWL_MODEL,
            self.CRP_CLASSIFIER,
            self.CRP_LOCATOR_MODEL,
            self.SIAMESE_MODEL,
            self.OCR_MODEL,
            self.SIAMESE_THRE,
            self.LOGO_FEATS,
            self.LOGO_FILES,
            self.DOMAIN_MAP_PATH,
        ) = load_config()
        print(f"Length of reference list = {len(self.LOGO_FEATS)}")

    """PhishIntention"""
    # @profile
    def test_orig_phishintention(self, url, screenshot_path):

        waive_crp_classifier = False
        phish_category = 0  # 0 for benign, 1 for phish, default is benign
        pred_target = None
        matched_domain = None
        siamese_conf = None
        awl_detect_time = 0
        logo_match_time = 0
        crp_class_time = 0
        crp_locator_time = 0
        # matched_coord = [-1, -1, -1, -1] # Added
        print("Entering PhishIntention")

        while True:

            ####################### Step1: Layout detector ##############################################
            start_time = time.time()
            pred_boxes, pred_classes, _ = pred_rcnn(
                im=screenshot_path, predictor=self.AWL_MODEL
            )
            awl_detect_time += time.time() - start_time

            if pred_boxes is not None:
                pred_boxes = pred_boxes.numpy()
                pred_classes = pred_classes.numpy()
            plotvis = vis(screenshot_path, pred_boxes, pred_classes)

            # If no element is reported
            if pred_boxes is None or len(pred_boxes) == 0:
                print("No element is detected, reported as benign")
                return (
                    phish_category,
                    pred_target,
                    matched_domain,
                    plotvis,
                    siamese_conf,
                    str(awl_detect_time)
                    + "|"
                    + str(logo_match_time)
                    + "|"
                    + str(crp_class_time)
                    + "|"
                    + str(crp_locator_time),
                    pred_boxes,
                    pred_classes,
                    None,
                )

            logo_pred_boxes, _ = find_element_type(
                pred_boxes, pred_classes, bbox_type="logo"
            )
            if logo_pred_boxes is None or len(logo_pred_boxes) == 0:
                print("No logo is detected, reported as benign")
                return (
                    phish_category,
                    pred_target,
                    matched_domain,
                    plotvis,
                    siamese_conf,
                    str(awl_detect_time)
                    + "|"
                    + str(logo_match_time)
                    + "|"
                    + str(crp_class_time)
                    + "|"
                    + str(crp_locator_time),
                    pred_boxes,
                    pred_classes,
                    logo_pred_boxes,
                )
            print(logo_pred_boxes)
            print("Entering siamese")

            ######################## Step2: Siamese (Logo matcher) ########################################
            start_time = time.time()
            (
                pred_target,
                matched_domain,
                matched_coord,
                siamese_conf,
            ) = check_domain_brand_inconsistency(
                logo_boxes=logo_pred_boxes,
                domain_map_path=self.DOMAIN_MAP_PATH,
                model=self.SIAMESE_MODEL,
                ocr_model=self.OCR_MODEL,
                logo_feat_list=self.LOGO_FEATS,
                file_name_list=self.LOGO_FILES,
                url=url,
                shot_path=screenshot_path,
                ts=self.SIAMESE_THRE,
            )
            logo_match_time += time.time() - start_time

            # if matched_coord is None:
            #    matched_coord = [-1, -1, -1, -1]
            if pred_target is None:
                print("Did not match to any brand, reported as benign")
                return (
                    phish_category,
                    pred_target,
                    matched_domain,
                    plotvis,
                    siamese_conf,
                    str(awl_detect_time)
                    + "|"
                    + str(logo_match_time)
                    + "|"
                    + str(crp_class_time)
                    + "|"
                    + str(crp_locator_time),
                    pred_boxes,
                    pred_classes,
                    logo_pred_boxes,
                )
            print("Exiting siamese")
            return (
                phish_category,
                pred_target,
                matched_domain,
                plotvis,
                siamese_conf,
                str(awl_detect_time)
                + "|"
                + str(logo_match_time)
                + "|"
                + str(crp_class_time)
                + "|"
                + str(crp_locator_time),
                pred_boxes,
                pred_classes,
                logo_pred_boxes,
            )



if __name__ == "__main__":

    print("Loading PI")
    phishintention_cls = PhishIntentionWrapper()
    print("Loaded PI")
