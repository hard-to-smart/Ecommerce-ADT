import CartItem from "./CartItem"

const CartItemList = () => {
  return (
    <div className='w-full  p-8 mt-5 bg-white shadow-xl'>
    <CartItem src={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}/>
    <CartItem src={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}/>    
    </div>
  )
}

export default CartItemList
