# React Chat App (frontend) using Web Sockets (SockJS)

This React application serves as a frontend for the [backend application](../chat-backend/)

## Trying the app

After downloading the app, use `npm install` to download required libraries then execute `npm start` on command line in the project folder to run the app
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project specifications

This project is bootstrapped via create-react-app

The project uses `Redux` for state management with redux toolikit slices. project has 4 slice

- messageSlice for keeping message list after the user logs in
- sessionSlice for keeping if the current user is logged in or not
- stompClient for keeping stomp events using SockJs, listens topics for incoming messages and acts according to event type in the incoming message
- userSlice for keeping logged in users

Reducers from the slices are used in the [store.js](./src/app/store.js), then the store is created via `configureStore` from `Redux Toolkit`, which is then used in the [index.js](./src/index.js) file via `Redux Provider`

First log in page appears, after logging in chat screen appears then incoming messages and logged in users are displayed in the chat screen
