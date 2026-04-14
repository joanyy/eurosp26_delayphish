//Update the popup values with the saved parameters (if available).
chrome.storage.sync.get().then((result) => {
    console.log("#####################");
    console.log(result);
    console.log("#####################");
    for (key in result) {
        document.getElementById(key).value = result[key];
    }
    //Set the checkboxes as they work differently
    if ("enableBlockScreen" in result && result["enableBlockScreen"])
        document.getElementById("enableBlockScreen").checked = true;
    if ("enableNotification" in result && result["enableNotification"])
        document.getElementById("enableNotification").checked = true;
});

//Function to locally (sync) save the settings to the browser.
function saveSettings() {
    let formData = new FormData(settingsForm);

    chrome.storage.sync.set({
        serviceURL: formData.get("serviceURL"),
        screenAmount: formData.get("screenAmount"),
        screenTiming: formData.get("screenTiming"),
        screenTollerance: formData.get("screenTollerance"),
        enableBlockScreen: document.getElementById("enableBlockScreen").checked ? "on" : "",
        enableNotification: document.getElementById("enableNotification").checked ? "on" : ""
    }).then(() => {
        console.log("Options have been saved");
    });
}

document.getElementById("saveSettingsButton").addEventListener("click", function () {
    saveSettings();
});
