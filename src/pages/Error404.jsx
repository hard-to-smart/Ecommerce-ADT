import React from "react";
import pgNotFound from "../assets/Error404.webp";
const Error404 = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-black h-[100vh]">
        <img src={pgNotFound} className="invert w-[40vw] " />
      </div>
    </>
  );
};

export default Error404;
