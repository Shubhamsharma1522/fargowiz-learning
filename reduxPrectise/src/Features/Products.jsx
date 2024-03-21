import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import classes from "./Products.module.css";

const Products = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.preventDefault();
    // console.log("quantity", quantity);
    dispatch(cartActions.addToCart({ ...item, quantity }));
    setQuantity(1);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);

    console.log("value", value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className={classes.card}>
      <article>
        <div>
          <img src={item.images[0]} alt={item.title} />
          <h3>{item.title}</h3>
        </div>

        <p className={classes.description}>{item.description}</p>
        <p className={classes.price}>${item.price}</p>

        <form className={classes.form} onSubmit={handleAddToCart}>
          <input
            className={classes.quantity}
            type="number"
            min={1}
            max={10}
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button type="submit">Add To Cart</button>
        </form>
      </article>
    </div>
  );
};

export default Products;
