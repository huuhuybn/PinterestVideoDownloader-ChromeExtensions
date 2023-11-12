chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(tab.url + " tab ")
    if (tab.url.indexOf('/pin/') > 0) {
        chrome.action.setBadgeText({text: '1'});
    } else {
        chrome.action.setBadgeText({text: ''});
    }
    chrome.action.setBadgeBackgroundColor({color: '#f14646'});
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('inject button')
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting === "hello") {
            chrome.action.setBadgeText({text: '1'});
            chrome.action.setBadgeBackgroundColor({color: '#f14646'});
        } else {
            chrome.action.setBadgeText({text: ''});
            chrome.action.setBadgeBackgroundColor({color: '#f14646'});
        }
    }
);

chrome.action.onClicked.addListener(tab => {
    var url = 'https://dotsave.app/#url=' + (tab.url);
    if (url && url.indexOf('/pin/') > 0) {
        chrome.tabs.create({url: url});
    } else {
        chrome.tabs.create({url: 'https://dotsave.app/'});
    }
});



