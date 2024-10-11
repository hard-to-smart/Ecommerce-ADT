import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProducts } from "../../utils/URLs";
import { filterOptions } from "../../utils/filterUtils";
import { filterByAvailability, selectFilteredProducts, setFilteredProducts } from "./productSlice";

const initialState = {
  categories: [],
  currentCategory: "",
  currentBrand:"",
  isLoading: false,
  error: null,
  filterOptions: filterOptions,
  isAvailabilitySelected:false
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const categoryResponse = await axios.get(`${getProducts}/categories/all`);
    console.log(categoryResponse);
    const categoryData = categoryResponse.data;
    return categoryData;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    updateIsAvailability:(state,action)=>{
        state.isAvailabilitySelected=action.payload;
    },
    updateCurrentBrand:(state,action)=>{
      state.currentBrand=action.payload;
    },

    updateFilterOptions:(state,action)=>{
      if(state.currentCategory === "") return;
      const existingCategoryFilter = state.filterOptions.find(
        (option) => option.name === "brands"
      );
      if (!existingCategoryFilter){
        state.filterOptions.push({
          name: "brands",
          options: Array.from((new Set(action.payload)))
        });
      }
      else{
        
        existingCategoryFilter.options = action.payload.map(
          (category) => category
        );
      }

    },
    resetState:(state)=>{
        state.categories=[];
        state.currentCategory="";
        state.currentBrand="";
        state.filterOptions=state.filterOptions.filter((option)=> option.name!="brands" && option.name!="category")
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;

      const existingCategoryFilter = state.filterOptions.find(
        (option) => option.name === "category"
      );

      if (!existingCategoryFilter) {
        state.filterOptions.push({
          name: "category",
          options: action.payload.map((category) => category.category),
        });
      } else {
        existingCategoryFilter.options = action.payload.map(
          (category) => category.category
        );
      }
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const setCategoryAndFilterProducts = (payload) => (dispatch) => {
  if(payload.category !== "brands") dispatch(categorySlice.actions.updateCurrentCategory(payload.option));
  else dispatch(categorySlice.actions.updateCurrentBrand(payload.option));

  if (payload.option) {
    dispatch(setFilteredProducts(payload));
  }
};

export const updateIsAvailability=(isAvailabe)=>(dispatch)=>{
  dispatch(categorySlice.actions.updateIsAvailability(isAvailabe));
  dispatch(filterByAvailability(isAvailabe));
  
}

export const selectCategories = (state) => state.category.categories;
export const selectFilterOptions = (state) => state.category.filterOptions;
export const selectIsLoading = (state) => state.category.isLoading;
export const selectError = (state) => state.category.error;
export const selectCurrentCategory = (state) => state.category.currentCategory;
export const selectCurrentBrand=(state)=> state.category.currentBrand;
export const selectIsAvailable=(state)=> state.category.isAvailabilitySelected;
export const { updateCurrentCategory,updateFilterOptions,resetState,updateCurrentBrand} = categorySlice.actions;
export default categorySlice.reducer;
