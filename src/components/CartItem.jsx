const CartItem = ({ src }) => {
  return (
    <div className="flex justify-between border-b-2 pb-5 border-gray-300 mt-5 ">
      <div className="w-[15%]">
        <img src={src} />
      </div>
      <div className="flex flex-col w-full">
        <div className="m-2">
          <p className="font-bold tracking-widest ">$29.0</p>
          <p className="text-gray-500 py-1">
            Jack & Jones glenn slim jeans in black
          </p>
          <div className="flex items-center py-1">
            <div className="flex justify-center rounded-full items-center w-[30px] h-[30px] bg-gray-300 shadow-md hover:scale-105">
              <button className="w-full h-full">-</button>
            </div>
            <span className="px-2  mx-2">5</span>
            <div className="flex justify-center rounded-full items-center w-[30px] h-[30px] bg-gray-300 shadow-md hover:scale-105">
              <button className="w-full h-full">+</button>
            </div>
          </div>

          <div className="py-5">
            <p className="uppercase font-semibold tracking-widest">
              Total Price: <span>$29.0</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50px] h-[50px]  flex justify-center items-center">
        <button className="tracking-widest m-2 hover:text-red-500 p-2 rounded-lg hover:shadow-lg">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
