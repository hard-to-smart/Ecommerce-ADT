import React, { useEffect } from 'react'
import Pagination from '../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { selectorBlog, selectorBlogError } from '../store/slices/blogSlice'
import { fetchBlog } from '../loader/fetchBlogs'

const Blogs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlog())
  }, [dispatch])

  // const isLoading = useSelector((state) => state.blog.isLoading)

  const blogsData = useSelector(selectorBlog)
  const error = useSelector(selectorBlogError)
  if(error){
    return error
  }
  
  return (
    <div className='my-4'>
      <Pagination data={blogsData}/>
    </div>
  )
}

export default Blogs
