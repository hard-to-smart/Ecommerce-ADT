import { useSelector } from "react-redux";
import { selectCartProducts } from "../store/slices/cartSlice";
import CartItem from "./CartItem"

const CartItemList = () => {
  const cartProducts = useSelector(selectCartProducts);
  console.log("inside cart item list", cartProducts)
  return (
    <div className='w-full p-8 mt-5 bg-white shadow-xl'>
      {
        cartProducts.map((productInCart)=>{
          return <CartItem key={productInCart.id} cartProduct={productInCart} />
        })
      }
    </div>
  )
}

export default CartItemList
