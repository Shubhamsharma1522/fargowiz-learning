import React from "react";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import { cartActions } from "../Store/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.products);
  const { isAuthenticate } = useSelector((state) => state.auth);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const placeOrderHandler = () => {
    dispatch(cartActions.clearCart());
    navigate("/products");
    alert("Congratulations !!! your order successfully placed");
  };

  return (
    <div className={classes.div}>
      {isAuthenticate && (
        <div className={classes.cart}>
          <h2>Your Cart</h2>
          <ul>
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartItems key={item.id} item={item} />)
            ) : (
              <li style={{ textAlign: "center" }}>Your cart is empty.</li>
            )}
          </ul>
          {cartItems.length > 0 && (
            <div className={classes.bottom}>
              <p>Total Cart Price : ${totalPrice}</p>
              <button onClick={placeOrderHandler}>Place Order</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
