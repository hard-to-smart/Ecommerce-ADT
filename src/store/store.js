import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./slices/ProfileSlice"

import blogSlice from "./slices/blogSlice";
import productReducer from "./slices/productSlice"




export const store = configureStore({
  reducer: {

    profile:profileReducer,
    blog: blogSlice,
    product:productReducer

  },
})