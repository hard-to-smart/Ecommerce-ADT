import React from 'react'
import { Link } from 'react-router-dom'
import { IoBagAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartProducts} from '../store/slices/cartSlice';
import { calculateDiscountedPrice } from '../utils/productUtil';
import { convertCurrency } from '../utils/currencyUtil';
import { selectCurrencyData, selectCurrentCurrency } from '../store/slices/currencySice';


const ProductCard = ({product, handleAddToCart}) => {
  const currentCurrency = useSelector(selectCurrentCurrency)
  const currentCurrencyData = useSelector(selectCurrencyData)
  
  const discountedPrice= product.discount ? calculateDiscountedPrice(product.price,product.discount) : null;
  
  return (
    <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl">
      <Link to="#">
        <img src={product.url} alt="Product image" className="h-80 w-72 object-cover rounded-t-xl" />
      </Link>
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
        <div className="flex items-center"> 
          {
            discountedPrice ? <>
              <p className="text-lg font-semibold text-black cursor-auto my-3">{selectCurrentCurrency} {discountedPrice}</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2"><span className='font-bold text-black'>{currentCurrency === "" ? "AUD" : currentCurrency}</span>{convertCurrency(product.price, currentCurrency, currentCurrencyData)}</p>
          </del>
            </> : <> 
            <p className="text-sm text-gray-600 cursor-auto ml-2"><span className='font-bold text-black'>{currentCurrency === "" ? "AUD" : currentCurrency}</span>{" "}{convertCurrency(product.price, currentCurrency, currentCurrencyData)}</p>
            </>
          }
          <div className="ml-auto">
            <Link to="#" onClick={()=>handleAddToCart(product)}>
             <IoBagAddOutline size={20}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard