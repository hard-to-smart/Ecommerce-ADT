import { createSlice } from "@reduxjs/toolkit";

const updateCartInLocalStorage = (products) =>{
    localStorage.setItem('productsInCart', JSON.stringify(products));
} 

const getCartInLocalStorage = () =>{
    const products = localStorage.getItem('productsInCart') ;
    return products  ? JSON.parse(products) : []
}
const calculateTotal =(products)=>{
    return products.reduce((acc, value)=> acc + (value.quantity * value.price), 0)
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products:  getCartInLocalStorage(),
        total: calculateTotal(getCartInLocalStorage()),
    },
    reducers:
        {
            addToCart: (state, action) => {
                state.products.push({...action.payload, quantity:1}) 
                state.total = calculateTotal(state.products)
                updateCartInLocalStorage(state.products)

            },
            deleteFromCart: (state, action) => {
                state.products=state.products.filter((product)=> product.id !== action.payload)
                state.total= calculateTotal(state.products)
                updateCartInLocalStorage(state.products)

            },
            increaseQuantity: (state, action) => {
                let updatedQuantity = state.products.map((product)=> product.id === action.payload ? {...product, quantity: product.quantity + 1} : product)
                state.products = updatedQuantity
                state.total= calculateTotal(state.products)
                updateCartInLocalStorage(state.products)


            },
            decreaseQuantity: (state, action) => {
                let updatedQuantity = state.products.map((product)=> product.id === action.payload ? {...product, quantity: product.quantity - 1} : product)
                state.products = updatedQuantity
                state.total= calculateTotal(state.products)
                updateCartInLocalStorage(state.products)
            }
        }
    
})

export const {addToCart, deleteFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions
export const selectCartProducts = (state) => {return state.cart.products}
export const selectTotal = (state) => {return state.cart.total}
export default cartSlice.reducer