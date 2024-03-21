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
        <div className={classes.name}>{title}</div>

        <img src={images[0]} alt={title} />

        <div className={classes.details}>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            style={{ fill: "white" }}
          >
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
          </svg>
          Remove Item
        </button>
      </div>
      <div> Item Total Price: ${totalPrice}</div>
    </div>
  );
}

export default CartItems;
