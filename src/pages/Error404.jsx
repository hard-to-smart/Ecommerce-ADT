import React from 'react'
import pgNotFound from "../assets/Error404.webp"
const Error404 = () => {
  return (
    <div>
      <img src={pgNotFound} className='invert w-[100vw] h-[100vh]'/>
    </div>
  )
}

export default Error404
