import React from 'react'

const BlogCard = ({blog}) => {
  return (
    // <div className='flex flex-col justify-center items-center min-h-screen bg-gray-50'>
    <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl">
      <h1 className=''>here comes your title {blog.name} </h1>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non cumque impedit quae cupiditate libero consequuntur fugit rerum quia soluta!</p>
    <button className='px-2 py-2 bg-red-300 rounded-[50px]'>Read More</button>
   </div>
    // </div>
  )
}

export default BlogCard