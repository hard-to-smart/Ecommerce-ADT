import { createSlice } from "@reduxjs/toolkit";

const getWishlistFromLS = () =>{
    const products = localStorage.getItem('productsInWishlist');
    return products ? JSON.parse(products) : []
}

const updateWishlistInLS = (products) =>{
    localStorage.setItem('productsInWishlist', JSON.stringify(products))
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState : {
        products : []
    },
    reducers:{
        addToWishlist : (state, action) =>{
            state.products.push(action.payload)
            updateWishlistInLS(state.products)
        },
        deleteFromWishlist: (state, action) =>{
            state.products = state.products.filter((product)=> product.id !== action.payload)
            updateWishlistInLS(state.products)
        }
    }
})


export const {addToWishlist, deleteFromWishlist} = wishlistSlice.actions
export const selectWishlistProducts = (state) => {return state.wishlist.products}
export default wishlistSlice.reducer