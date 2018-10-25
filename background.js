function clearMe(tab) {
    chrome.browsingData.removeCache({}, function() {
        chrome.tabs.reload(tab.id);
    });
}

chrome.browserAction.onClicked.addListener(clearMe);