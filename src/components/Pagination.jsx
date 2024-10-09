import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Link, useSearchParams } from "react-router-dom";
const Pagination = ({ blogs }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;
  const totalPages = Math.ceil(blogs.length / 5);
  const blogsToDisplay = () => {
    let startIndex = (currentPage - 1) * blogsPerPage;
    let endIndex = startIndex + blogsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({page: pageNumber})
  };
  // this use effect condition only runs when search params is updated, i.e. page is changed and 
// and updates the currentPage only when the values dont match. i.e. in case of back navigation
    useEffect(() => {
      const pageFromParams = parseInt(searchParams.get("page"), 10) || 1;
       if (pageFromParams !== currentPage && pageFromParams <= totalPages) {
      setCurrentPage(pageFromParams);
    }
    }, [searchParams, totalPages]);

  const pageButtons = ()=>{
    console.log("page buttons function called")
    let buttons = []
    for(let i=1; i<= totalPages; i++){
        buttons.push(
            <button key={i} onClick={()=>handlePageChange(i)}
            className={`px-3 py-1 rounded ${
                currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}>{i}</button>
        )
    }
    return buttons
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {blogsToDisplay().map((blog) => (
        // <Link to={`/blog/${blog.id}`} key={blog.id} state={{ blog }} > 
          <BlogCard key={blog.id} blog={blog} />
        // </Link>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        {pageButtons()}
      </div>
    </>
  );
};

export default Pagination;
