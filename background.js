function injectedFunction() {
    
    document.onload = function(){
        alert("loaded!");
    };
    
    new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
        var shortsButton = Array.prototype.slice.call(document.querySelectorAll("a[title^='Shorts']"));
        shortsButton.forEach(element => {
            element.remove();
        });
    });
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if ("url" in changeInfo) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: injectedFunction
        });
    }
}
);
