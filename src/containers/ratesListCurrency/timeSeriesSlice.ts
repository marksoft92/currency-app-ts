import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchTimeseriesCurrency } from "./fetchTimeseriesCurrency";
import { ExchangeRate } from "./types";

const initialState: ExchangeRate = {
  loading: false,
  error: null,
  rates: {},
};

export const timeSeriesCurrencySlice = createSlice({
  name: "timeSeriesCurrency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeseriesCurrency.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTimeseriesCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.rates = action.payload.rates;
      })
      .addCase(fetchTimeseriesCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Wystąpił błąd podczas ładowania artykułów.";
      });
  },
});

export const selectRates = (state: RootState) => state.timeSeriesCurrency.rates;
export const selectLoading = (state: RootState) =>
  state.timeSeriesCurrency.loading;

export default timeSeriesCurrencySlice.reducer;
