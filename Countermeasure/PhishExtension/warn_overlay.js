id_overlay = "WarnOverlayPhish";

// Do not apply multiple overlays on tab change
if (document.getElementById(id_overlay) == null) {
    console.log("###START OVERLAY###");
    var overlay = document.createElement("div");
    overlay.setAttribute("style", "all: initial");
    overlay.id = id_overlay;
    overlay.style.height = "100%";
    overlay.style.width = "100%";
    overlay.style.backgroundColor = "white";
    overlay.style.position = "fixed";
    overlay.style.top = "0px";
    overlay.style.left = "0px";
    overlay.style.zIndex = 9999;
    console.log(overlay);

    var overlay_content_div = document.createElement("div");
    overlay_content_div.setAttribute("style", "all: initial");
    overlay_content_div.style.margin = "0";
    overlay_content_div.style.position = "absolute";
    overlay_content_div.style.top = "50%";
    overlay_content_div.style.left = "50%";
    overlay_content_div.style.transform = "translate(-50%, -50%)";

    var overlay_title = document.createElement("p");
    overlay_title.setAttribute("style", "all: initial");
    overlay_title.innerText = "⚠️Warning\n";
    overlay_title.style.fontSize = "90px";
    overlay_title.style.fontFamily = "Arial";
    overlay_title.style.color = "black";

    var overlay_text = document.createElement("p");
    overlay_text.setAttribute("style", "all: initial");
    overlay_text.innerText = "This website has displayed unusual behaviour with respect to the logos.\nPlease verify that the website is safe and proceed with caution.\n\n";
    overlay_text.style.fontSize = "30px";
    overlay_text.style.fontFamily = "Arial";
    overlay_text.style.color = "black";

    var overlay_continue_button = document.createElement("button");
    overlay_continue_button.setAttribute("style", "all: initial");
    overlay_continue_button.innerText = "Understood. Show webpage anyway";
    overlay_continue_button.style.fontSize = "25px";
    overlay_continue_button.style.backgroundColor = "red";
    overlay_continue_button.style.color = "white";
    overlay_continue_button.style.fontFamily = "Arial";
    overlay_continue_button.onclick = function () {
        document.getElementById("WarnOverlayPhish").remove();
    }

    /*overlay.appendChild(overlay_title);
    overlay.appendChild(overlay_text);
    overlay.appendChild(overlay_continue_button);*/

    overlay_content_div.appendChild(overlay_title);
    overlay_content_div.appendChild(overlay_text);
    overlay_content_div.appendChild(overlay_continue_button);
    overlay.appendChild(overlay_content_div);

    if (document.body.firstChild)
        document.body.insertBefore(overlay, document.body.firstChild);
    else
        document.body.appendChild(overlay);
    console.log("###END OVERLAY###");

} else {
    console.log("Overlay is already being displayed");
}
