import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userList",
  initialState: {
    value: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { setUsers } = userSlice.actions;

export const selectUserList = (state) => state.userList.value;

export default userSlice.reducer;
