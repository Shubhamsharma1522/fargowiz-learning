import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../Store/uiSlice";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../Store/authSlice";
import classes from "./Header.module.css";
import { cartActions } from "../Store/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart.products);
  const { isAuthenticate } = useSelector((state) => state.auth);

  console.log("cartQuantity", cartQuantity);

  const totalItems = cartQuantity.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const logoutHandler = () => {
    dispatch(authActions.logOut());
    dispatch(cartActions.clearCart());
    navigate("/");
  };

  const toggleCartHandler = () => {
    navigate("/cart");
    // dispatch(uiActions.toggle());
  };
  console.log("cartQuantity", cartQuantity);
  return (
    <header className={classes.header}>
      <h2>
        Redux <span className={classes.span}>Cart</span>
        <button className={classes.svgButton} onClick={toggleCartHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span>{totalItems}</span>
        </button>
      </h2>
      {!isAuthenticate ? (
        <div className={classes.button}>
          <Link to="/login">
            <button className={classes.loginButton}>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      ) : (
        <div>
          <button onClick={logoutHandler}>LogOut</button>
        </div>
      )}
    </header>
  );
};

export default Header;
