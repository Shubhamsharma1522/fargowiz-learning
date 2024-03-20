import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
