function sendNativeMessage() {
    chrome.runtime.sendNativeMessage('com.example.messaging', {
        query: 'hello-world',
    })
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send-message-button').addEventListener('click', sendNativeMessage);
})