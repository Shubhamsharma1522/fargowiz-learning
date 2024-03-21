// import { useSelector } from "react-redux";
// import Cart from "./Cart/Cart";
import ProductList from "./Features/ProductList";

function App() {
  // const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <div>
      {/* {showCart && <Cart />} */}
      <ProductList />
    </div>
  );
}

export default App;
