function shortenUrl() {
    var inputUrl = document.getElementById('urlInput').value;

    chrome.runtime.sendMessage({url: inputUrl}, function(response) {
    
        if (response.success) {
            alert('Shortened URL: ' + response.shortUrl);
        } else {
            alert('Error shortening URL: ' + response.error);
        }
    });
}