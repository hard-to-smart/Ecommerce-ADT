import { configureStore } from "@reduxjs/toolkit";

import blogSlice from "./slices/blogSlice";
import cartSlice from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
import currencyReducer from "./slices/currencySice";
import userReducer from "./slices/userSlice";
import categoryReducer from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    blog: blogSlice,
    product: productReducer,
    currency: currencyReducer,
    user: userReducer,
    category:categoryReducer
  },
});
