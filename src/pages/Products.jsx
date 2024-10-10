import React, { useEffect } from 'react'
import Pagination from '../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectProducts } from '../store/slices/productSlice'
import { addToCart } from '../store/slices/cartSlice'

const Products = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const productsData = useSelector(selectProducts)
  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
  }

  return (
    <Pagination data={productsData} handleAddToCart={handleAddToCart} />
  )
}

export default Products
