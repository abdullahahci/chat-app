# Spring Chat App (backend) using Web Sockets (SockJS)

This is a simple spring project for a chat app using web sockets with SockJS

## Getting Started

This application serves as the backend for the [React chat app](../chat-frontend/) project

[ChatController](./src/main/java/com/ahci/chatapp/controller/ChatController.java) handles the Logging in and Messaging
operations

[WebSocketConfiguration](./src/main/java/com/ahci/chatapp/config/WebSocketConfiguration.java) sets the configuration
using `@EnableWebSocketMessageBroker` annotation with the help of `configureMessageBroker` and `registerStompEndpoints`
methods

Connect to the application with the url [http://localhost:8080/chatBot](http://localhost:8080/chatBot), listen
to `/topics/users` for logged in users and `/topics/chat` for listening messages
