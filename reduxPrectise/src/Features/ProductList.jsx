import React, { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";
import "../index.css";
import Pagination from "../Layout/Pagination.jsx";

const ProductList = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        setLoadedData(data.products);
      } catch (error) {
        // handle the error here
        console.error("Error fetching data:", error);
      }
    };
    fetchedData();
  }, []);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = loadedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div id="product-list">
        {currentProducts.map((product) => (
          <Products key={product.id} item={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={loadedData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProductList;
