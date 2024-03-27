import React from "react";
import "../index.css";
import { useSelector } from "react-redux";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  const { isAuthenticate } = useSelector((state) => state.auth);

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {isAuthenticate && (
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                className={`page-link ${
                  currentPage === number ? "active" : ""
                }`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
