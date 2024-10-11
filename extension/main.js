let nativeHost = null

function sendNativeMessage() {
    chrome.runtime.sendNativeMessage('com.example.messaging', {
        query: 'hello-world',
    }).then((e) => { console.log(e) })
}

function establishNativeConnection(){
    nativeHost = chrome.runtime.connectNative('com.example.messaging')
}

function destroyNativeConnection(){
    if (nativeHost) {
        nativeHost.disconnect();
        nativeHost = null;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('create-connection').addEventListener('click', establishNativeConnection);
	document.getElementById('disconnect').addEventListener('click', destroyNativeConnection);
	document.getElementById('send-single-message').addEventListener('click', sendNativeMessage);
})