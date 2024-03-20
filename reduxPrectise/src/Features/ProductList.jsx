import React, { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";
import "../index.css";

const ProductList = () => {
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      setLoadedData(data.products);
    };
    fetchedData();
  }, []);

  return (
    <div id="product-list">
      {loadedData.map((product) => (
        <Products key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ProductList;
