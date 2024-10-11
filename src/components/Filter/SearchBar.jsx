import { setIn } from 'formik';
import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { selectFilteredProducts, selectProducts, updateFilteredProducts } from '../../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
const SearchBar = () => {
    const products = useSelector(selectProducts)
    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    const handleSearchChange = (e)=>{
        setInput(e.target.value)
    }
    useEffect(()=>{
        const temp= products.filter((product)=> product.name.toLowerCase().includes(input));
        console.log(temp)
        dispatch(updateFilteredProducts(temp))
    }, [input])

  return (
    <div className='flex justify-around items-center  border-2 rounded-3xl my-2'>
        <input type='text' placeholder='Search by keyword' className='m-0 h-full py-4 rounded-3xl text-lg outline-none' onChange={handleSearchChange}/>
        <IoMdSearch size={24} className='cursor-pointer'/>
    </div>
  )
}

export default SearchBar