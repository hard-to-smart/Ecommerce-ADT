import { useSelector } from "react-redux";
import { selectCartProducts } from "../store/slices/cartSlice";
import CartItem from "./CartItem"

const CartItemList = () => {
  // selecting cart products from store 
  const cartProducts = useSelector(selectCartProducts);
  console.log("inside cart item list", cartProducts)
  return (
    <div className='w-full p-8 mt-5 bg-white shadow-xl'>
      {/* mapping cartProducts into single cart item component */}
      {
        cartProducts.map((productInCart)=>{
          return <CartItem key={productInCart.id} cartProduct={productInCart} />
        })
      }
    </div>
  )
}

export default CartItemList
