import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products:[],
    },
    reducers:[
        {
            addToCart: (state, action) => {
                state.products.push({...action.payload, quantity:1}) 
            }
        }
    ]
})

export const {addToCart} = cartSlice.actions
export const selectCartProducts = (state) => {return state.cart.products}
export default cartSlice.reducer