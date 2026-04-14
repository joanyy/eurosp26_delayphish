// SETTINGS

const typeCombinations = [["logo"], ["sec"], ["logo", "sec"]];
const editCombinations = [["p"], ["c"], ["p", "c"]];
const maxIntensityC = 4; //0: Fully visible - 1: 75% visible - 2: 50% visible - 3: 25% visible - 4: HIDDEN
const maxIntensityP = 4; //0: Original - 1: 2px - 2: 3px - 3: 4px - 4: 5px

// Webpage logo/images info
var contentList = [{
        "id": "logo_edited",
        "type": "logo",
        "slowRenderingEnabled": true,
        "maxPercentageHidden": 78,
        "minPercentageHidden": 48,
        "imgChangeEnabled": true,
        "imgChangeList": ["components/logo5px.png", "components/logo4px.png", "components/logo3px.png", "components/logo2px.png", "components/logo.png"]
    }, {
        "id": "facebookIcon",
        "type": "logo",
        "slowRenderingEnabled": true,
        "maxPercentageHidden": 100,
        "minPercentageHidden": 0,
        "imgChangeEnabled": true,
        "imgChangeList": ["components/facebookIcon5px.png", "components/facebookIcon4px.png", "components/facebookIcon3px.png", "components/facebookIcon2px.png", "components/facebookIcon.png"]
    }, {
        "id": "googleIcon",
        "type": "logo",
        "slowRenderingEnabled": true,
        "maxPercentageHidden": 100,
        "minPercentageHidden": 0,
        "imgChangeEnabled": true,
        "imgChangeList": ["components/googleIcon5px.png", "components/googleIcon4px.png", "components/googleIcon3px.png", "components/googleIcon2px.png", "components/googleIcon.png"]
    }
];

//List of identifiers using notation
var desiredOutputs = [
    //Logo pixelation
    "logo_p1",
    "logo_p2",
    "logo_p3",
    "logo_p4",

    //Logo curtain
    "logo_c1",
    "logo_c2",
    "logo_c3",
    "logo_c4",

    //Logo pixelation+curtain
    "logo_p1_c1",
    "logo_p1_c2",
    "logo_p1_c3",
    "logo_p2_c1",
    "logo_p2_c2",
    "logo_p2_c3",
    "logo_p3_c1",
    "logo_p3_c2",
    "logo_p3_c3",
    "logo_p4_c1",
    "logo_p4_c2",
    "logo_p4_c3",

];

//
//
// END OF SETTINGS
//
//


//This is done to avoid changing the contentList used in PhishMe but helps with the clarity of the script.
function reverseImgChangeList() {
    for (var i = 0; i < contentList.length; i++) {
        contentList[i].imgChangeList.reverse();
    }
}
reverseImgChangeList();

function pageEdited(editIdentifier) {
    console.log("EDIT " + editIdentifier);
}

function changeImgPath(imgID, imgPath) {
    //console.log("Change logo" + imgPath);
    var img = document.getElementById(imgID);
    img.src = imgPath;
}

function changeRenderingPercentage(imgID, newPercentage) {
    var img = document.getElementById(imgID);
    img.style.clipPath = "inset(0px 0px " + newPercentage + "%)";
}

function resetWebpage() {
    //Revert to the original image
    for (k = 0; k < contentList.length; k++) {
        imgInfo = contentList[k];
        if (imgInfo.imgChangeEnabled) {
            changeImgPath(imgInfo.id, imgInfo.imgChangeList[0])
        }
    }
    //Revert to the full visible version.
    for (k = 0; k < contentList.length; k++) {
        imgInfo = contentList[k];
        if (imgInfo.slowRenderingEnabled) {
            var img = document.getElementById(imgInfo.id);
            img.style.clipPath = "inset(0px 0px " + imgInfo.minPercentageHidden + "%)"
        }
    }

}

const timer = ms => new Promise(res => setTimeout(res, ms));

window.onload = (event) => {
    console.log("Page is fully loaded");
    resetWebpage();
    pageEdited("0");

    executeDesiredModifications();
};

/*
targetType : string containing "logo" or "sec"
editCombo : string containing "c" or "p"
intensity : int with the strength of the transformation
 */
async function applySingleModification(targetType, editType, intensity) {
    const contentListFiltered = contentList.filter((elem) => targetType.includes(elem.type));
    for (const imgToChange of contentListFiltered) {
        var imgID = imgToChange.id;
        //var img = document.getElementById(imgID);
        if (editType == "c") {
            var newPercentage = Math.round((intensity / maxIntensityC) * (imgToChange.maxPercentageHidden - imgToChange.minPercentageHidden)) + imgToChange.minPercentageHidden;
            changeRenderingPercentage(imgID, newPercentage);
        }
        if (editType == "p") {
            changeImgPath(imgID, imgToChange.imgChangeList[Math.min(intensity, maxIntensityP)]);
        }
    }
}

async function executeDesiredModifications() {
    for (const output of desiredOutputs) {
        await timer(1500);
        resetWebpage();
        var split = output.split("-");
        for (spl of split) {
            var modParams = spl.split("_");
            await applySingleModification(modParams[0], modParams[1].charAt(0), parseInt(modParams[1].charAt(1)));
            if (modParams.length > 2)
                await applySingleModification(modParams[0], modParams[2].charAt(0), parseInt(modParams[2].charAt(1)));
        }
        await timer(100);
        pageEdited(output);
    }
    await timer(1500);
    console.log("TERM");
}
