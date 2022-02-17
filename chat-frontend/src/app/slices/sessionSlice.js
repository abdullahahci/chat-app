import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "connected",
  initialState: {
    value: false,
  },
  reducers: {
    connect: (state) => {
      state.value = true;
    },
    disconnect: (state) => {
      state.value = false;
    },
  },
});

export const { connect, disconnect } = sessionSlice.actions;

export const isConnected = (state) => state.connected.value;

export default sessionSlice.reducer;
