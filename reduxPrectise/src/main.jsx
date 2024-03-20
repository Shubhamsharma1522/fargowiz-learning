import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import Header from "./Layout/Header.jsx";
import Cart from "./Cart/Cart.jsx";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
