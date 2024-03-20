import React from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={classes.cart}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
      </ul>
      <div className={classes.bottom}>
        <p>All Items Price : ${totalPrice}</p>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
