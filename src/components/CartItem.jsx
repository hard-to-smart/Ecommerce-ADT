import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
  selectCartProducts,
} from "../store/slices/cartSlice";
import { useEffect } from "react";

const CartItem = ({ cartProduct }) => {
  const dispatch = useDispatch();
  // selecting cart products from store
  const cartItemData = useSelector(selectCartProducts);
  useEffect(() => {}, [cartItemData]);

  return (
    // displaying individual cart item
    <div className="flex justify-between border-b-2 pb-5 border-gray-300 mt-5 ">
      <div className="w-[15%]">
        <img src={cartProduct.image} />
      </div>
      <div className="flex flex-col w-full">
        <div className="m-2">
          <p className="font-bold tracking-widest ">{cartProduct.price}</p>
          <p className="text-gray-500 py-1">{cartProduct.title}</p>
          {/* increase-decrease quantity controls */}
          <div className="flex items-center py-1">
            <div className="flex justify-center rounded-full items-center w-[30px] h-[30px] bg-gray-300 shadow-md hover:scale-105">
              <button
                className="w-full h-full"
                onClick={() => dispatch(decreaseQuantity(cartProduct.id))}
                disabled={cartProduct.quantity <= 1}
              >
                -
              </button>
            </div>
            <span className="px-2  mx-2">{cartProduct?.quantity}</span>
            <div className="flex justify-center rounded-full items-center w-[30px] h-[30px] bg-gray-300 shadow-md hover:scale-105">
              <button
                className="w-full h-full"
                onClick={() => dispatch(increaseQuantity(cartProduct.id))}
              >
                +
              </button>
            </div>
          </div>
          {/* total prize display for particular item */}
          <div className="py-5">
            <p className="uppercase font-semibold tracking-widest">
              Total Price:{" "}
              <span>{cartProduct.quantity * cartProduct.price}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50px] h-[50px]  flex justify-center items-center">
        {/* remove button */}
        <button
          className="tracking-widest m-2 hover:text-red-500 p-2 rounded-lg hover:shadow-lg"
          onClick={() => dispatch(deleteFromCart(cartProduct.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
