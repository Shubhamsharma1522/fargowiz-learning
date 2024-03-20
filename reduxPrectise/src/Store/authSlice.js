import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticate: false },
  reducers: {
    logIn(state) {
      state.isAuthenticate = true;
    },
    logOut(state) {
      state.isAuthenticate = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
