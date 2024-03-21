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

      //  total quantity  in cart
      const totalQuantityInCart = state.products.reduce(
        (total, product) => total + product.quantity,
        0
      );

      if (existingProduct) {
        if (totalQuantityInCart + newProduct.quantity > 20) {
          alert("Cannot add more items. Cart limit exceeded.");
          return;
        }
        existingProduct.quantity += newProduct.quantity || 1;
      } else {
        if (totalQuantityInCart + (newProduct.quantity || 1) > 20) {
          alert("Cannot add more items. Cart limit exceeded.");
          return;
        }
        state.products.push(newProduct);
      }
    },

    increaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );

      //  total quantity in cart
      const totalQuantityInCart = state.products.reduce(
        (total, product) => total + product.quantity,
        0
      );

      if (product) {
        if (totalQuantityInCart + 1 > 20) {
          alert("Cannot add more items. Cart limit exceeded.");
          return;
        }
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
    clearCart(state) {
      state.products = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
