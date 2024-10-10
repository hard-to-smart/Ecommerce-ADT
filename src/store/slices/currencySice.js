import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getConversionRate} from "../../utils/URLs";

const initialState = {
  currencyData:[],  
  currentCurrency: "",
  isLoading: false,
  error: null,
  isOpen:false
};

export const fetchCurrency = createAsyncThunk(
  "currency/fecthCurrency",
  async () => {
    const response = await axios.get(getConversionRate);
    const currencyData = response.data.conversion_rates;
    return currencyData;
  }
);

export const currencySlice = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {
    updateCurrentCurrency:(state,action)=>{
        state.currentCurrency=action.payload
        console.log(state.currentCurrency);
    }
    ,
    toggleDropdown:(state,action)=>{
        state.isOpen=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currencyData = action.payload;
    });
    builder.addCase(fetchCurrency.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const selectCurrencyData = (state) => state.currency.currencyData;
export const selectIsLoading = (state) => state.currency.isLoading;
export const selectError = (state) => state.currency.error;
export const selectIsOpen=(state)=> state.currency.isOpen;
export const selectCurrentCurrency=(state)=>state.currency.currentCurrency;
export const {updateCurrentCurrency,toggleDropdown}=currencySlice.actions
export default currencySlice.reducer;
