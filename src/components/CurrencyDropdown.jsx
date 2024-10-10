import { useEffect } from "react";
import {
  fetchCurrency,
  selectCurrencyData,
  selectCurrentCurrency,
  selectIsOpen,
  toggleDropdown,
  updateCurrentCurrency,
} from "../store/slices/currencySice";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CurrencyDropdown = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  const currencyData = useSelector(selectCurrencyData);
  const currentCurrency = useSelector(selectCurrentCurrency);
  const isOpen = useSelector(selectIsOpen);

  return (
    <div className="absolute w-64 z-10 top-12 left-4">
      <div
        className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg cursor-pointer text-white flex items-center justify-between"
        onClick={() => dispatch(toggleDropdown(!isOpen))}
      >
        <span className="flex-grow">
          {!currentCurrency ? "Select Currency" : currentCurrency}
        </span>
        {isOpen ? (
          <FaChevronUp className="ml-2 transition-transform duration-300" />
        ) : (
          <FaChevronDown className="ml-2 transition-transform duration-300" />
        )}
      </div>

      {isOpen && (
        <ul className="absolute top-full mt-2 w-full bg-white/20 backdrop-blur-md rounded-lg shadow-lg z-50 max-h-40 overflow-y-auto">
          {Object.keys(currencyData).map((currency, index) => (
            <li
              key={index}
              className="px-4 py-2 text-white hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => {
                dispatch(updateCurrentCurrency(currency));
                dispatch(toggleDropdown(false));
              }}
            >
              {currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencyDropdown;
