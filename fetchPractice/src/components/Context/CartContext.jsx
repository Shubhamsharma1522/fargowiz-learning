import React, { createContext, useReducer } from "react";

const CartContext = createContext();

//initial state oF cart
const initialState = {
  products: [],
};

//reducer function frr manage cartt state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return addProductsToCart(state, action.payload);
    case "CLEAR_PRODUCTS":
      return clearCart(state);
    case "INCREASE_PRODUCT_QUANTITY":
      return increaseProductQuantity(state, action.payload);
    case "DECREASE_PRODUCT_QUANTITY":
      return decreaseProductQuantity(state, action.payload);
    default:
      return state;
  }
};

//add product function
const addProductsToCart = (state, { product, quantity }) => {
  const totalCartProducts = state.products.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (totalCartProducts + quantity > 20) {
    alert("Cannot exceed cart quantity more than 20");
    return state;
  }

  const existingProductIndex = state.products.findIndex(
    (item) => item.id === product.id
  );

  if (existingProductIndex !== -1) {
    const updatedProducts = [...state.products];
    updatedProducts[existingProductIndex].quantity += quantity;
    return { ...state, products: updatedProducts };
  } else {
    return {
      ...state,
      products: [...state.products, { ...product, quantity }],
    };
  }
};

//clear cart function
const clearCart = (state) => {
  return { ...state, products: [] };
};

//funcction to increase the quantity of product
const increaseProductQuantity = (state, productId) => {
  const totalCartProducts = state.products.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (totalCartProducts + 1 > 20) {
    alert("Cannot exceed cart quantity more than 20");
    return state;
  }

  const updatedProducts = state.products.map((product) =>
    product.id === productId
      ? { ...product, quantity: product.quantity + 1 }
      : product
  );

  return { ...state, products: updatedProducts };
};

//decrease product quantity
const decreaseProductQuantity = (state, productId) => {
  const updatedProducts = state.products.map((product) =>
    product.id === productId
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );

  const productIndex = updatedProducts.findIndex(
    (product) => product.id === productId
  );

  if (updatedProducts[productIndex].quantity < 1) {
    updatedProducts.splice(productIndex, 1);
  }

  return { ...state, products: updatedProducts };
};

//cart context provider component
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProducts = (product, quantity) => {
    dispatch({ type: "ADD_PRODUCTS", payload: { product, quantity } });
  };

  const clearProducts = () => {
    dispatch({ type: "CLEAR_PRODUCTS" });
  };

  const increaseProductQuantity = (productId) => {
    dispatch({ type: "INCREASE_PRODUCT_QUANTITY", payload: productId });
  };

  const decreaseProductQuantity = (productId) => {
    dispatch({ type: "DECREASE_PRODUCT_QUANTITY", payload: productId });
  };

  //cart context value
  const cartContext = {
    products: state.products,
    addProducts,
    clearProducts,
    increaseProductQuantity,
    decreaseProductQuantity,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
