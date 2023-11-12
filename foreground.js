console.log('foreground : ' + window.location.href)
var url = window.location.href;
if (url.indexOf('/pin/') > 0) {
    chrome.runtime.sendMessage({greeting: "hello"}, function () {
    });
} else {
    chrome.runtime.sendMessage({greeting: "no"}, function () {
    });
}
