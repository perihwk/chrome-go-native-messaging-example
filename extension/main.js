function sendNativeMessage() {
    chrome.runtime.sendNativeMessage('com.example.messaging', {
        query: 'hello-world',
    }).then((e) => { console.log(e) })
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send-message-button').addEventListener('click', sendNativeMessage);
})