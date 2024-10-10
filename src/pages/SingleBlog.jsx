import React from "react";
import GridLayout from "../components/GridLayout";
import { useLocation } from "react-router-dom";

const SingleBlog = () => {
  const {state}=useLocation();
  return (
    <div className="w-full h-screen bg-black relative flex justify-center items-center">
      <GridLayout />
      <div className="absolute top-0 w-1/2 h-1/2 left-0 z-20">
        <p className="text-7xl text-white tracking-wide p-10  font-semibold">Blog</p>
      </div>

      <div className="w-1/2 h-1/2  bg-white  rounded-xl z-10 ">
        <div
          className="absolute  w-1/6 h-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 
        shadow-2xl bg-gradient-to-tl from-yellow-500 via-orange-500 to-red-500
        rounded-xl  transition-all duration-500 ease-in-out  hover:rotate-12 hover:translate-y-1
        "></div>
        <div className=" absolute w-[40%] h-1/3  rounded-xl top-1/2 -translate-y-1/2 translate-x-[25%] overflow-auto " >
          <p className="tracking-widest text-xl p-4 text-black  font-semibold ">{state.blog.title.charAt(0).toUpperCase()+state.blog.title.slice(1)}</p>
          <div className="p-4 flex justify-center">
            <p className="text-lg max-w-[500px]  text-gray-700 leading-relaxed text-justify pr-6">{state.blog.body}.</p>
        </div>
        </div>

      </div>
    </div>
  );
};

export default SingleBlog;
