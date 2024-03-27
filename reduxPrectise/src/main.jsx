import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import Cart from "./Cart/Cart.jsx";
import ProductList from "./Features/ProductList.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "products", element: <ProductList /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
