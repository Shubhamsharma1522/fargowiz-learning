import React, { useContext } from "react";
import CartContext from "./Context/CartContext";
import UserProgressContext from "./Context/userProgress";
import Button from "./UI/Button";

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleClearCart() {
    cartCtx.clearProducts();
  }

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  const totalCartProducts = cartCtx.products.reduce(
    (totalNumberOfProducts, item) => {
      return totalNumberOfProducts + item.quantity;
    },
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src="" alt="logo image" />
        <h1>Cart Items</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart}>Cart{totalCartProducts}</Button>
      </nav>
      <div>
        <Button onClick={handleClearCart}>Clear Cart</Button>
      </div>
    </header>
  );
}

export default Header;
