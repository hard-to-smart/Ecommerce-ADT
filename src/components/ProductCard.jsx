import React from 'react'
import { Link } from 'react-router-dom'
import { IoBagAddOutline } from "react-icons/io5";
import { calculateDiscountedPrice } from '../utils/productUtil';
const ProductCard = ({brand,price,title,discount,image}) => {

  const discountedPrice=calculateDiscountedPrice(price,discount);
  
  return (
   
  <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
    <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl">
      <Link to="#">
        <img src={image} alt="Product image" className="h-80 w-72 object-cover rounded-t-xl" />
      </Link>
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">${discountedPrice}</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">${price}</p>
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