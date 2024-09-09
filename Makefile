build: clean build-host

build-host:
	echo "[+] building native-messaging-example-host"
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o bin/native-messaging-host-example.exe host/main.go

clean:
	go clean && rm -f bin/*
