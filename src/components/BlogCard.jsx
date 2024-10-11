import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, path }) => {
  return (
    // blog container
    <div className="w-[475px] h-[405px]  bg-white shadow-2xl   rounded-xl z-10 relative mb-5">
      {/* inside blog content */}
      <div className=" absolute w-[70%]  h-1/2   rounded-xl top-[10%]   right-1/2 translate-x-1/2 ">
        <p className="tracking-wide  p-4 text-black  font-bold text-xl ">
          {blog.title.charAt(0).toUpperCase() + blog.title.slice(1)}
        </p>
        <div className="p-4 ">
          <p className="text-lg text-gray-700 leading-relaxed  text-justify line-clamp-4">
            {blog.body + blog.body}
          </p>
        </div>
      </div>
      {/* individual blog linking */}
      <Link to={path} state={{ blog }}>
        <button className="px-8 py-3 uppercase bottom-10 absolute right-1/2 translate-x-1/2 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold rounded-full border-none hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out hover:rotate-3">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
