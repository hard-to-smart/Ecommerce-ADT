import React from "react";
import { useSelector } from "react-redux";
import { selectWishlistProducts } from "../store/slices/wishlistSlice";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const wishlist = useSelector(selectWishlistProducts);
  console.log(wishlist);
  return (
    <div className="w-full p-4  flex flex-col justify-center mt-4">
          <div className="w-full bg-white p-8 flex  justify-between shadow-xl">
            <p className="uppercase tracking-widest font-bold">My wishlist</p>
            <p className="tracking-wide">Items are reserved for 60 min</p>
            </div>

            <div className="flex flex-wrap w-full">
            {wishlist.map((el)=> {
              return <ProductCard product={el}/>
            })
            }
          </div>
    </div>
  );
};

export default Wishlist;
