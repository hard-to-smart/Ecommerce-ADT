import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./slices/ProfileSlice"

import blogSlice from "./slices/blogSlice";
import cartSlice from "./slices/cartSlice";
import productReducer from "./slices/productSlice"
import currencyReducer from "./slices/currencySice"




export const store = configureStore({
  reducer: {

    profile:profileReducer,
    cart: cartSlice,
    blog: blogSlice,
    product:productReducer,
    currency:currencyReducer

  },
})