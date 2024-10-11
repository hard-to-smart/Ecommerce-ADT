import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProducts } from "../../utils/URLs";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  filteredProducts: [],
  brands:[]
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
      console.log("inside setfiltered",action.payload)
      const selectedCategory = action.payload.option;
      state.filteredProducts = state.products.filter(product => 
        {
          if(action.payload.category === "brands"){
            return product.brand ===selectedCategory;
          }
          else if(action.payload.category === "Availability"){
            return product.inStock;
          }
          else{
           return  product.category === selectedCategory
          }
          
        }
      );
    },

    updateFilteredProducts: (state, action) => {
      console.log("actionasljsdkjf", action.payload);

      state.filteredProducts = action.payload;
    },

    updateFilteredProducts: (state, action) => {
      console.log("actionasljsdkjf", action.payload);

      state.filteredProducts = action.payload;
    },
    
    filterByAvailability:(state,action)=>{

      const filteredData=state.filteredProducts.filter((product)=> {
        if(action.payload) return product.inStock
      })
      console.log(filteredData)
      state.filteredProducts=filteredData;
    },

    resetBrands:(state)=>{
      state.brands=[];
    },

    getBrandsFromFilteredProducts:(state)=>{
        const brands=state.filteredProducts.map((product) => product.brand);
        state.brands=brands;
    }
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
export const selectBrands=(state)=> state.product.brands;
export const { setFilteredProducts,getBrandsFromFilteredProducts,resetBrands,filterByAvailability, updateFilteredProducts } =
  productSlice.actions;
export default productSlice.reducer;
