import "./App.css";
import Cart from "./components/Cart.jsx";
import { CartContextProvider } from "./components/Context/CartContext.jsx";
import { UserProgressProvider } from "./components/Context/userProgress.jsx";
import Header from "./components/Header";
import Products from "./components/ProductsFetching";

function App() {
  return (
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <Cart />
        <Products />
      </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
