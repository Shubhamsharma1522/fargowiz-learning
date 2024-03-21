import React, { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import UserProgressContext from "./Context/userProgress.jsx";
import CartContext from "./Context/CartContext.jsx";
import CartItems from "./CartItems.jsx";
import Button from "./UI/Button.jsx";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.products.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  // console.log(cartTotal, "cart total");

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "detailedCart"}
      onClose={
        userProgressCtx.progress === "detailedCart" ? handleCloseCart : null
      }
    >
      <h2>Your cart</h2>
      <ul>
        {cartCtx.products.map((item) => (
          <CartItems
            key={item.id}
            name={item.title}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.increaseProductQuantity(item.id)}
            onDecrease={() => cartCtx.decreaseProductQuantity(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">Total cart{cartTotal}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          close
        </Button>
        <Button>go to checkout</Button>
      </p>
    </Modal>
  );
}

export default Cart;
