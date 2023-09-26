import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "./currencyListSlice";
import { ApiResponse, Currency } from "./types";
export const apiKey = process.env.REACT_APP_API_KEY;

export const fetchCurrency = createAsyncThunk("currency/fetch", async () => {
  try {
    const response = await axiosInstance.get<ApiResponse>(
      `https://api.apilayer.com/exchangerates_data/latest?apikey=${apiKey}&base=PLN`
    );
    const { base, date, rates } = response.data;

    const currencyRates: Currency[] = Object.entries(rates).map(
      ([currency, rate]) => ({
        currency,
        rate: Number(rate),
      })
    );

    const currencyData: ApiResponse = {
      base,
      date,
      rates: currencyRates,
    };
    return [currencyData];
  } catch (error) {
    throw error;
  }
});
