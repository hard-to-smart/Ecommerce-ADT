import React from "react";
import './loader.css'
const Loader = () => {

  return(
    // defining the loader element
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-black"> 
   <span class="loader"></span>
   </div>
  )
};

export default Loader;
