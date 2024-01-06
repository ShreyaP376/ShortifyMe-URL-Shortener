chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        
        chrome.runtime.sendNativeMessage('nnlokdoeddjhkfcjbajffldpdmpgmbdn', {url: request.url}, function(response) {
            sendResponse(response);
        });
        return true;  
    }
);
