import  { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaLaptop, FaTshirt, FaHome } from "react-icons/fa";
import AccordionItem from "./AccordionItem";
import {  fetchCategories, resetState, selectCategories, selectFilterOptions, updateFilterOptions } from "../../store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { resetBrands, selectBrands } from "../../store/slices/productSlice";





const FilteringComponent = () => {
  
  const [openCategories, setOpenCategories] = useState([]);
  const dispatch=useDispatch();
  const filterOptions=useSelector(selectFilterOptions);
   const brands=useSelector(selectBrands);

  useEffect(()=>{
    dispatch(fetchCategories());

    return ()=> dispatch(resetState());
  },[])

    useEffect(()=>{
      if(brands.length !==0 )dispatch(updateFilterOptions(brands));
  },[brands]);
   
   
   
   

  const toggleCategory = (categoryName) => {
    setOpenCategories((prevOpen) =>
      prevOpen.includes(categoryName)
        ? prevOpen.filter((name) => name !== categoryName)
        : [...prevOpen, categoryName]
    );
  };

  return (
    <div className="min-w-[250px]  bg-white overflow-hidden m-5 mx-2 shadow-2xl">
      <div className="p-4 flex justify-between items-center">
      <GiHamburgerMenu className="text-xl cursor-pointer"/>
        <h2 className="text-xl font-semibold text-black">Filter Products</h2>
      </div>
      <hr className="border-gray-300 mt-2" />
      <div className="divide-y divide-gray-200 ">
        {filterOptions.map((category) => (
          <AccordionItem
            key={category.name}
            category={category}
            isOpen={openCategories.includes(category.name)}
            onToggle={() => toggleCategory(category.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteringComponent;
