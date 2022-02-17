import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messageList",
  initialState: {
    value: [],
  },
  reducers: {
    setMessages: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { setMessages } = messageSlice.actions;

export const selectMessageList = (state) => state.messageList.value;

export default messageSlice.reducer;
