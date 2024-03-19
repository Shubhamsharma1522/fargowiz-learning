import React, { useContext, useState } from "react";
import CartContext from "./Context/CartContext.jsx";
import Button from "./UI/Button.jsx";

function Products({ item }) {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddProduct = (event) => {
    event.preventDefault();
    cartCtx.addProducts(item, quantity);
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    // Ensure value is a positive integer
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="meal-item">
      <article>
        <img src={item.images[0]} alt="image" />
        <div>
          <h3>{item.title}</h3>
          <p className="meal-item-description">{item.description}</p>
          <p className="meal-item-price">{item.price}</p>
        </div>
        <form onSubmit={handleAddProduct}>
          <input
            className="product-card-quantity"
            type="number"
            min={1}
            max={10}
            value={quantity}
            onChange={handleQuantityChange}
          />
          <Button className="meal-item-actions" type="submit">
            Add to cart
          </Button>
        </form>
      </article>
    </div>
  );
}

export default Products;
