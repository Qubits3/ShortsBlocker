chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
    if ("url" in changeInfo) {
        console.info(changeInfo.url);
        if (changeInfo.url.includes("www.youtube.com/shorts")) {
            chrome.tabs.update(tabId, { url: "https://www.youtube.com/feed/subscriptions" });
        }
    }
}
);
