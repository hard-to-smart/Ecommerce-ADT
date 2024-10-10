import React from 'react'
import Pagination from '../components/Pagination'

const Products = () => {
  const productsData = [
    {
      id: 1,
      name: 'Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
    },
    {
      id: 4,
      name: 'Product 4',
    },
  ]
  return (
    <Pagination data={productsData} />
  )
}

export default Products
