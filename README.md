# Native Messaging

This repo contains an example Chrome extension that uses Native Message to communicate with a native application.

## Running the extension
1. Clone the repo
2. Load the `extension` directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. Follow the host installation instructions below.
4. Open the extension and press send to send a native message

## Build and install the host
1. `make build` will build a windows amd64 executable. You can also just run the `CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o bin/native-messaging-host-example.exe host/main.go` yourself
2. After building the executable update the `host\manifest.json` file path to point to it
3. Either run the install_host.bat script as an Administrator or add the registry key yourself `REG ADD "HKLM\Software\Google\Chrome\NativeMessagingHosts\com.example.messaging" /ve /t REG_SZ /d "C:\\EXAMPLE\\PATH\\TO\\host\manifest.json" /f`