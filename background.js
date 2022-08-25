function injectedFunction() {

    document.onload = function () {
        alert("loaded!");
    };

    new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
        var shortsButton = Array.prototype.slice.call(document.querySelectorAll("a[title^='Shorts']"));
        shortsButton.forEach(element => {
            element.remove();
        });
    });
}

function injectFunction(tabId){
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: injectedFunction
    });
}

chrome.tabs.onUpdated.addListener(function (tabId) {
    injectFunction(tabId);
});

chrome.tabs.reload(function (tabId){
    injectFunction(tabId);
});
