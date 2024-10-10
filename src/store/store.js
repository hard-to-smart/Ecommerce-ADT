import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./slices/ProfileSlice"

import blogSlice from "./slices/blogSlice";
import cartSlice from "./slices/cartSlice";




export const store = configureStore({
  reducer: {

    profile:profileReducer,

    blog: blogSlice,

    cart: cartSlice

  },
})