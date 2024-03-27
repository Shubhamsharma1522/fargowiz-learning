import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticate: false, user: {} },
  reducers: {
    logIn(state, action) {
      console.log(action,"action");
      state.isAuthenticate = true;
      state.user = {email:action.payload.email}
    },
    logOut(state) {
      state.isAuthenticate = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
