import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./slices/ProfileSlice"

import blogSlice from "./slices/blogSlice";




export const store = configureStore({
  reducer: {

    profile:profileReducer,

    blog: blogSlice

  },
})