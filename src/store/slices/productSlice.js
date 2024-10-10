import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getFeaturedProducts } from "../../utils/URLs";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fecthProdcuts",
  async () => {
    const productsResponse = await axios.get(getFeaturedProducts);
    const productsData = productsResponse.data.products;
    return productsData;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const selectProducts = (state) => state.product.products;
export const selectIsLoading = (state) => state.product.isLoading;
export const selectError = (state) => state.product.error;
export default productSlice.reducer;
