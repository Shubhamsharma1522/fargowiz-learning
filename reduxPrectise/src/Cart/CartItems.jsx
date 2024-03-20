import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import classes from "./CartItem.module.css";

function CartItems({ item }) {
  const dispatch = useDispatch();

  const { images, title, quantity, price, id } = item;

  const removeCartItemHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const increaseQuantityHandler = () => {
    dispatch(cartActions.increaseQuantity(id));
  };

  const decreaseQuantityHandler = () => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  const totalPrice = quantity * price;

  return (
    <div className={classes.box}>
      <div className={classes.item}>
        <img src={images[0]} alt={title} />
        <div className={classes.details}>
          <div className={classes.name}>{title}</div>
          <div className={classes.controls}>
            <button onClick={decreaseQuantityHandler}>-</button>
            <span className={classes.quantity}>{quantity}</span>
            <button onClick={increaseQuantityHandler}>+</button>
          </div>
        </div>
      </div>
      <div className={classes.price}>${price}</div>

      <div className={classes.removeButton}>
        <button className={classes.button} onClick={removeCartItemHandler}>
          Remove Item
        </button>
      </div>
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
}

export default CartItems;
