// import { useSelector } from "react-redux";
// import Cart from "./Cart/Cart";

import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";

function App() {
  return (
    <div>
      {/* {showCart && <Cart />} */}
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
