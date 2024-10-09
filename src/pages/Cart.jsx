import React from "react";
import Checkout from "../components/Checkout";
import CartItemList from "../components/CartItemList";

const Cart = () => {
  return (
    <div className="w-full p-4  flex justify-center mt-4">
      <div className="w-[70%]  flex justify-between">
        <div className="w-[65%] ">
          <div className="w-full bg-white p-8 flex  justify-between shadow-xl">
            <p className="uppercase tracking-widest font-bold">My cart</p>
            <p className="tracking-wide">Items are reserved for 60 min</p>
          </div>
          <CartItemList />
        </div>
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
