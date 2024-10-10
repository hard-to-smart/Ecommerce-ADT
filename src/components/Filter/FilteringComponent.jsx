import  { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaLaptop, FaTshirt, FaHome } from "react-icons/fa";
import AccordionItem from "./AccordionItem";
import {  fetchCategories, selectCategories, selectFilterOptions } from "../../store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";





const FilteringComponent = () => {
  
  const [openCategories, setOpenCategories] = useState([]);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchCategories());
  },[])
   
   const filterOptions=useSelector(selectFilterOptions);

  const toggleCategory = (categoryName) => {
    setOpenCategories((prevOpen) =>
      prevOpen.includes(categoryName)
        ? prevOpen.filter((name) => name !== categoryName)
        : [...prevOpen, categoryName]
    );
  };

  return (
    <div className="min-w-[250px]  bg-white overflow-hidden m-5 mx-2">
      <div className="p-4 flex justify-center  ">
        <h2 className="text-xl font-semibold text-black ">Filter Products</h2>
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
