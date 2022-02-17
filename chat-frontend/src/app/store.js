import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "./slices/userSlice";
import sessionReducer from "./slices/sessionSlice";
import messageReducer from "./slices/messageSlice";

export default configureStore({
  reducer: {
    userList: userListReducer,
    connected: sessionReducer,
    messageList: messageReducer,
  },
});
