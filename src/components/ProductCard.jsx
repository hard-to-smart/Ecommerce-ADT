import React from 'react'
import { Link } from 'react-router-dom'
import { IoBagAddOutline } from "react-icons/io5";
const ProductCard = () => {
  return (
   
  <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
    <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl">
      <Link to="#">
        <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTgzODM0NDU&ixlib=rb-1.2.1&q=80" alt="Product image" className="h-80 w-72 object-cover rounded-t-xl" />
      </Link>
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto">
            <Link to="#">
             <IoBagAddOutline size={20}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCard