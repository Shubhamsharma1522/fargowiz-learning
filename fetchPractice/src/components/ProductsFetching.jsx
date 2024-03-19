import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products.jsx";

function ProductsFetching() {
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = async () => {
      const { data } = await axios.get("https://dummyjson.com/products");

      setLoadedProducts(data.products);
      // console.log(data);
    };
    fetchedProducts();
  }, []);

  return (
    <div id="product-list">
      {loadedProducts.map((product) => (
        <Products key={product.id} item={product} />
      ))}
    </div>
  );
}

export default ProductsFetching;
