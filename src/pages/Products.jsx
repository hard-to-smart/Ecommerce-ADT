import React, { useEffect } from 'react'
import Pagination from '../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectFilteredProducts, selectFilteredProducts, selectProducts } from '../store/slices/productSlice'
import { addToCart } from '../store/slices/cartSlice'
import FilteringComponent from '../components/Filter/FilteringComponent'
import { addToWishlist } from '../store/slices/wishlistSlice'

const Products = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const productsData = useSelector(selectFilteredFilteredProducts)
  console.log("Product Data",productsData);
  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
  }

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product))
  }

  return (
    <div className='flex flex-row'>
      <div className='w-[500px] h-full'>
        <FilteringComponent/>
      </div>
    <Pagination data={productsData} handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist} />
    </div>
  )
}

export default Products
