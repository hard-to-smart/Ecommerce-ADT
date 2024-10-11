import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProducts } from "../../utils/URLs";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  filteredProducts: [],
};

export const fetchProducts = createAsyncThunk(
  "product/fecthProdcuts",
  async () => {
    const productsResponse = await axios.get(`${getProducts}`);
    const productsData = productsResponse.data;
    return productsData;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      const selectedCategory = action.payload;
      state.filteredProducts = state.products.filter(
        product => product.category === selectedCategory
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.filteredProducts = action.payload;
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
export const selectFilteredProducts = (state) => state.product.filteredProducts;
export const {setFilteredProducts} =productSlice.actions;
export default productSlice.reducer;
