import { useSelector } from "react-redux";
import BankCards from "./BankCards";
import { selectTotal } from "../store/slices/cartSlice";
import { selectCurrentCurrency } from "../store/slices/currencySice";

const Checkout = () => {
  // selecting total amount from Redux store
  const total = useSelector(selectTotal)
  const currentCurrency = useSelector(selectCurrentCurrency)
  return (
    // checkout card
    <div className="w-[30%] h-[370px]  bg-white p-5 flex flex-col items-center shadow-xl">
      <p className="uppercase font-bold tracking-widest py-4 text-start w-full">
        Total
      </p>
      <div className="border-b-2 border-gray-200 w-[90%] mb-3 "></div>
      <div className="font-semibold w-full flex flex-col items-center">
        <div className="flex w-full justify-between px-2 my-2">
          <p>Sub-total</p>

          <p>{currentCurrency} {total}</p>
        </div>
        <div className="flex w-full justify-between px-2 my-2">
          <p>Delivery</p>
        </div>
        <div className="border-b-2 border-gray-200 w-[90%] my-3 "></div>

        <button
          className="uppercase text-white w-[75%] py-3 my-2 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
          style={{ backgroundColor: "#0B8C38" }}
        >
          Checkout
        </button>
        <div className=" p-4 w-full px-2 my-2">
          <p className="uppercase">We Accept:</p>
          <BankCards />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
