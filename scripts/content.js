window.onload = function () {
    f();
}


let observer = new MutationObserver(mutations => {
    for (let mutation of mutations) {
        for (let addedNode of mutation.addedNodes) {

            console.log(addedNode.textContent);
            if (addedNode instanceof Element) {
                console.log(addedNode)
                var top = addedNode.querySelector('[data-test-id="pin"]')
                var link = top.getAttribute('data-test-pin-id')

                var button = document.createElement('a')
                button.href = 'https://dotsave.app/?url=https://www.pinterest.com/pin/' + link ;
                button.target = '_blank'
                button.innerText = 'Download'
                button.className = 'downloadButton'
                top.appendChild(button)
        }
    }
}
})
;

observer.observe(document, {childList: true, subtree: true});

function f() {

    var pinWrapper = document.querySelectorAll('[data-test-id="pinWrapper"]');
    for (let i = 0; i < pinWrapper - 1; i++) {
        pinWrapper[i].style.position = 'relative';
    }

    var allID = document.querySelectorAll('[data-test-id="pin"]')

    for (let i = 0; i < allID.length - 1; i++) {
        var id = allID[i].getAttribute('data-test-pin-id')
        var button = document.createElement('a')
        button.href = 'https://dotsave.app/?url=https://www.pinterest.com/pin/' + id;
        button.target = '_blank'
        button.innerText = 'Download'
        button.className = 'downloadButton'
        allID[i].appendChild(button);

    }

}
