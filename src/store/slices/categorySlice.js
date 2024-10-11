import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProducts } from "../../utils/URLs";
import { filterOptions } from "../../utils/filterUtils";
import { selectFilteredProducts, setFilteredProducts } from "./productSlice";

const initialState = {
  categories: [],
  currentCategory: "",
  isLoading: false,
  error: null,
  filterOptions: filterOptions,
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

export const setCategoryAndFilterProducts = (category) => (dispatch) => {
  console.log("inside");
  dispatch(categorySlice.actions.updateCurrentCategory(category));
  console.log("inside2");
  if (category) {
    dispatch(setFilteredProducts(category));
  }
};

export const selectCategories = (state) => state.category.categories;
export const selectFilterOptions = (state) => state.category.filterOptions;
export const selectIsLoading = (state) => state.category.isLoading;
export const selectError = (state) => state.category.error;
export const selectCurrentCategory = (state) => state.category.currentCategory;
export const { updateCurrentCategory } = categorySlice.actions;
export default categorySlice.reducer;
