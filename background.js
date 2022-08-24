chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if ("url" in changeInfo) {
        if (changeInfo.url.includes("www.youtube.com/shorts")) {
            chrome.storage.sync.get(['key'], function (result) {
                chrome.tabs.update(tabId, { url: result.key });
            });
        }
        else
        {
            chrome.storage.sync.set({ key: changeInfo.url });
        }
    }
}
);
