import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { fetchCurrency } from "./fetchCurrency";
import { CurrencyState } from "./types";

const initialState: CurrencyState = {
  list: [],
  loading: false,
  error: null,
};

export const axiosInstance = axios.create({
  maxRedirects: 0,
});

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Wystąpił błąd podczas ładowania państw.";
      });
  },
});

export const selectCurrency = (state: RootState) => state.currency.list;
export const selectLoading = (state: RootState) => state.currency.loading;

export default currencySlice.reducer;
