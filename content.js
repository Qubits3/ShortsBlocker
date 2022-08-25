new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
    var shortsButton = Array.prototype.slice.call(document.querySelectorAll("a[title^='Shorts']"));
    shortsButton.forEach(element => {
        element.remove();
    });
});