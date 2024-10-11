import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentCategory, selectCurrentCategory, setCategoryAndFilterProducts } from "../../store/slices/categorySlice";

const AccordionItem = ({ category, isOpen, onToggle }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectCurrentCategory);

  const handleCategorySelect = (option) => {
    dispatch(setCategoryAndFilterProducts(option));
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-4 px-6 text-left focus:outline-none focus:ring-2 hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-3">
          <span className="font-medium text-gray-800 uppercase">{category.name}</span>
        </div>
        {isOpen ? (
          <FiChevronUp className="text-gray-500" />
        ) : (
          <FiChevronDown className="text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="py-3 px-6 bg-gray-50">
          {category.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 py-2 cursor-pointer hover:bg-gray-100 rounded transition-colors duration-200"
            >
              <input
                type="radio" 
                name={category.name} 
                checked={selectedCategory === option} 
                className="form-radio h-5 w-5 text-blue-600"
                onChange={() => handleCategorySelect(option)} 
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
