import React, { createContext, useReducer } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
});

const initialState = {
  progress: "",
};

const userProgressReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return { ...state, progress: "detailedCart" };
    case "HIDE_CART":
      return { ...state, progress: "" };
    default:
      return state;
  }
};

export function UserProgressProvider({ children }) {
  const [state, dispatch] = useReducer(userProgressReducer, initialState);

  const showCart = () => {
    dispatch({ type: "SHOW_CART" });
  };

  const hideCart = () => {
    dispatch({ type: "HIDE_CART" });
  };

  const userProgressCtx = {
    progress: state.progress,
    showCart,
    hideCart,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
