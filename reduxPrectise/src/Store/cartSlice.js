import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity += newProduct.quantity || 1;
      } else {
        state.products.push(newProduct);
      }
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product) {
        product.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
