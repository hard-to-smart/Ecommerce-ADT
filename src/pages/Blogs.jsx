import React from 'react'
import Pagination from '../components/Pagination'

const Blogs = () => {
  const blogs = [
    { name: "blog 1"},
    { name: "blog 2"},
    { name: "blog 3"},
    { name: "blog 4"},
    { name: "blog 4"},
    { name: "blog 4"},
    { name: "blog 4"},
    { name: "blog 4"},
    { name: "blog 4"},
    
  ]
  return (
    <div>
      <Pagination blogs={blogs}/>
    </div>
  )
}

export default Blogs
