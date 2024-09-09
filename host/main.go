package main

import (
	"log"
	"os"
	"os/signal"
	"syscall"

	host "github.com/rickypc/native-messaging-host"
)

type Request struct {
	Query     string `json:"query"`
	MessageID string `json:"messageId"`
}

type Response struct {
	MessageID string `json:"messageId"`
	Query     string `json:"query"`
	Response  string `json:"response"`
}

func main() {
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		messaging := (&host.Host{}).Init()
		var request Request

		for {
			if err := messaging.OnMessage(os.Stdin, &request); err != nil {
				os.Exit(-1)
			}

			responseMsg := Response{
				MessageID: request.MessageID,
				Query:     request.Query,
			}

			switch request.Query {
			case "hello-world":
				responseMsg.Response = "Hello World!"
			}
			if err := messaging.PostMessage(os.Stdout, &responseMsg); err != nil {
				log.Fatalf("failed posting messaging: %v", err)
			}
		}
	}()
	<-quit
	os.Exit(0)
}
