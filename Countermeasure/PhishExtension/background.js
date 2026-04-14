// Set some placeholder parameters which might differ from the saved ones.
var parameters = {
    serviceURL: "ws://localhost:9997",
    enableBlockScreen: "",
    enableNotification: "",
    screenAmount: 5,
    screenTiming: 1000,
    screenTollerance: 10
};

// Update the parameters with the saved settings.
chrome.storage.sync.get(null, (items) => {
    for (key in items) {
        parameters[key] = items[key];
    }
});

// When a parameter in the popup is changed, update the parameters here.
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync') {
        const changedItems = Object.keys(changes);
        for (const item of changedItems) {
            parameters[item] = changes[item].newValue;
        }
    }
});

var currentScanRequestId = "";
var currentScanHostname = "";
var currentTabId = 0;

// IDs of the handlers for the interval (screen/status) functions.
// These are checked during each interval execution to react to URL/tab changes.
var activeScreenIntervalHandler = 0;
var activeStatusIntervalHandler = 0;

var webSocket = null;

chrome.action.setIcon({
    path: 'icons/disconnected.png'
});

function connect() {
    console.log(parameters);
    webSocket = new WebSocket(parameters.serviceURL);
    if (chrome.runtime.lastError) {
        console.log("Error: " + chrome.runtime.lastError.message);
    }

    webSocket.onopen = () => {
        chrome.action.setIcon({
            path: 'icons/connected.png'
        });
    };

    webSocket.onmessage = (message) => {
        parsed_data = JSON.parse(message.data);

        if (parsed_data.type == "status_known") {
            var received_status = parsed_data.status;
            var received_hostname = parsed_data.hostname;
            var received_status_expire = parsed_data.status_expire;

            resetScan();

            // Update the icon/apply modifications exclusively if we are still on
            // the domain for which we received the answer.
            if (received_hostname == currentScanHostname) {

                changeIcon(received_status);

                if (parsed_data.status == "warn") {

                    if (parameters.enableNotification) {
                        chrome.scripting.executeScript({
                            target: {
                                tabId: currentTabId
                            },
                            files: ["warn_alert.js"]
                        });
                    }

                    if (parameters.enableBlockScreen) {
                        chrome.scripting.executeScript({
                            target: {
                                tabId: currentTabId
                            },
                            files: ["warn_overlay.js"]
                        });
                    }

                }
            }

        } else if (parsed_data.type == "status_unknown") {
            console.log(parsed_data.request_id);
            currentScanRequestId = parsed_data.request_id;
            currentScanHostname = parsed_data.hostname;
            console.log(parsed_data);

            takeScreenshots(currentScanHostname);

        }
    };

    webSocket.onclose = () => {
        resetScan();
        chrome.action.setIcon({
            path: 'icons/disconnected.png'
        });
        console.log('Websocket closed. Attempting to reconnect in 1000 ms');
        setTimeout(function () {
            connect();
        }, 1000);

    };

}

// Currently unused function to disconnect from websocket.
function disconnect() {
    if (webSocket) {
        webSocket.close();
    }
}

// Send a "ping" message every 10000 ms to keep the connection active
function keepAlive() {
    const keepAliveIntervalId = setInterval(
            () => {
            if (webSocket) {
                console.log('ping');

                mess = {
                    type: "ping",
                }
                if (webSocket.readyState == 1)
                    webSocket.send(JSON.stringify(mess));
            } else {
                clearInterval(keepAliveIntervalId);
            }
        },
            10000);
}

// First connect to websocket and start ping function
connect();
keepAlive();

// Event triggered when the tab is updated (e.g. new URL)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.url.startsWith("http")) {
        UrlChange(tab.url);
        currentTabId = tabId;
    }
});

// Event triggered when another tab is selected
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId).then(result => {
        if (result.url.startsWith("http")) {
            UrlChange(result.url);
            currentTabId = activeInfo.tabId;
        }
    })
});

function takeScreenshots(hostname) {
    var screen_counter = 0;
    var hostname = currentScanHostname;
    console.log("###### Current hostname: " + hostname);
    var scanRequestId = currentScanRequestId;
    var screenIntervalHandler = setInterval(function () {
        // If not connected or reached screenshot threshold, clear interval
        if (webSocket.readyState != 1 || screen_counter >= parameters.screenAmount || screenIntervalHandler != activeScreenIntervalHandler) {
            clearInterval(screenIntervalHandler);
        } else {
            screen_counter++;

            chrome.tabs.captureVisibleTab(undefined, {
                "format": "png"
            },
                function (img_data) {
                console.log("###### " + screen_counter);
                if (chrome.runtime.lastError) {
                    console.log("Error: " + chrome.runtime.lastError.message);
                    cancelCurrentScan();
                    return;
                }

                mess = {
                    type: "send_screen",
                    screen_counter: screen_counter,
                    hostname: hostname,
                    request_id: scanRequestId,
                    img_data: img_data
                }

                if (screen_counter >= parameters.screenAmount) {
                    requestStatusUpdate(hostname);
                    clearInterval(screenIntervalHandler);

                }
                webSocket.send(JSON.stringify(mess));

            })
        }

    }, parameters.screenTiming);
    activeScreenIntervalHandler = screenIntervalHandler;
}

// Start requesting the results until we get it
function requestStatusUpdate(hostname) {
    var request_counter = 0;
    var statusIntervalHandler = setInterval(function () {
        request_counter++;
        console.log("###########REQUESTING STATUS FOR " + hostname);
        if (webSocket.readyState != 1 || request_counter > 10 || statusIntervalHandler != activeStatusIntervalHandler) {
            clearInterval(statusIntervalHandler);
            return;
        } else {
            mess = {
                type: "get_result",
                hostname: hostname,
            }
            webSocket.send(JSON.stringify(mess));
        }

    }, 1000);
    activeStatusIntervalHandler = statusIntervalHandler;
}

/*function addUrlToStorage(url) {
chrome.storage.local.get({
urls: []
}, (result) => {
const updatedUrls = [...result.urls, {
url,
timestamp: Date.now()
}
];
chrome.storage.local.set({
urls: updatedUrls
});
});
}*/

// Get hostname/domain from URL
const getHostname = (url) => {
    return new URL(url).hostname;
}

function UrlChange(url) {
    // If we change the tab/url mid-scan, cancel ongoing scan.
    console.log(activeScreenIntervalHandler);
    console.log(activeStatusIntervalHandler);
    if (activeScreenIntervalHandler) {
        cancelCurrentScan();
    }
    if (activeStatusIntervalHandler) {
        resetScan();
    }

    var timestamp = Date.now();
    hostname = getHostname(url);
    currentScanHostname = hostname;

    // TODO: Implement function to query status locally. It is currently skipped
    if (queryStatusLocally(hostname)) {
        // Do stuff to indicate status received
        return;
    }

    mess = {
        type: "scan",
        hostname: hostname,
        timestamp: timestamp,
        parameters: {
            screenAmount: parameters.screenAmount,
            screenTiming: parameters.screenTiming,
            screenTollerance: parameters.screenTollerance
        }
    };
    if (webSocket.readyState == 1) {
        webSocket.send(JSON.stringify(mess));
        changeIcon("check");
    }
}

// Modify the extension icon to indicate the state
function changeIcon(state) {
    switch (state) {
    case "safe":
        chrome.action.setIcon({
            path: "icons/safe.png"
        });
        break;
    case "warn":
        chrome.action.setIcon({
            path: "icons/warn.png"
        });
        break;
    case "check":
        chrome.action.setIcon({
            path: "icons/checking.png"
        });
        break;
    case "error":
        chrome.action.setIcon({
            path: "icons/error.png"
        });
        break;
    }
}

// Chrome can only take screenshots of the current active tab.
// If the tab is changed in the meanwhile, we must stop the screenshotting process
// to avoid collecting screenshots of different webpages.
function cancelCurrentScan() {
    resetScan();
    changeIcon("error");
    var timestamp = Date.now();
    mess = {
        type: "abort_scan",
        timestamp: timestamp,
        request_id: currentScanRequestId
    };

    if (webSocket.readyState == 1)
        webSocket.send(JSON.stringify(mess));
}

// Indicate that the currently active screen/status interval will be stopped.
function resetScan() {
    activeScreenIntervalHandler = 0;
    activeStatusIntervalHandler = 0;
}

// TODO: This function can be developed in the future to locally save the website status
// to be cached instead of requesting the server each time.
function saveStatusLocally(hostname, returned_status, status_expire) {
    // TODO
}

// TODO: This function can be developed in the future to query the website status locally
// using the cache instead of requesting the server each time.
function queryStatusLocally(hostname) {
    // TODO
    return false;
    // Return truthy value (status) if available locally and still valid.
}
