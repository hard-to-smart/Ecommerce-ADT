import React from "react";

const Overlay = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-blue-400 to-purple-500">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content on top of the overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-20">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-2">Welcome to Our Website</h1>
          <p className="text-lg">This is an example of a responsive overlay.</p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
