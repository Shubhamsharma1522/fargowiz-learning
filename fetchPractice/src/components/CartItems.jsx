import React from "react";

function CartItems({ name, quantity, price, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} X {price}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => onIncrease()}>+</button>
        <button onClick={() => onDecrease()}>-</button>
      </p>
    </li>
  );
}

export default CartItems;
