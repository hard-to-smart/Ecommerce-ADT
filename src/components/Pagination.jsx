import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import SingleProductCard from "./SingleProductCard";
import ProductCard from "./ProductCard";
const Pagination = ({ data, handleAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const dataPerPage = 10;
  const totalPages = Math.ceil(data.length / dataPerPage);
  const dataToDisplay = () => {
    let startIndex = (currentPage - 1) * dataPerPage;
    let endIndex = startIndex + dataPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber });
  };
  // this use effect condition only runs when search params is updated, i.e. page is changed and
  // and updates the currentPage only when the values dont match. i.e. in case of back navigation
  useEffect(() => {
    const pageFromParams = parseInt(searchParams.get("page"), 10) || 1;
    if (pageFromParams !== currentPage && pageFromParams <= totalPages) {
      setCurrentPage(pageFromParams);
    }
  }, [searchParams, totalPages]);

  const pageButtons = () => {
    console.log("page buttons function called");
    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {dataToDisplay().map((singleData) =>
          location.pathname === "/product" ? (
            <Link
              to={`/product/${singleData.id}`}
              key={singleData.id}
              state={{ singleData }}
            >
              <ProductCard key={singleData.id} product={singleData} handleAddToCart={handleAddToCart}/>
            </Link>
          ) : (
              <BlogCard key={singleData.id} blog={singleData} path={`/blog/${singleData.id}`} />
          )
        )}
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        {pageButtons()}
      </div>
    </>
  );
};

export default Pagination;
