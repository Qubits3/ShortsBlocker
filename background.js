chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
    if (changeInfo.url.toString().includes("shorts")) {
        chrome.tabs.update(tabId, { url: "https://www.youtube.com/feed/subscriptions" });
    }
}
);