import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { getStartAndEndDate } from '../../utils/helpers';
const apiKey = process.env.REACT_APP_API_KEY;


export interface RateInfo {
    [currency: string]: number;
}

export interface ExchangeRate {
    loading: boolean;
    error: string | null;
    rates: { [date: string]: RateInfo };
}



const initialState: ExchangeRate = {
    loading: false,
    error: null,
    rates: {},
};
const { start, end } = getStartAndEndDate();

export const fetchTimeseriesCurrency = createAsyncThunk('timeseries/fetch', async (currencyCode: string | undefined) => {
    const response = await axios.get<ExchangeRate>(
        `https://api.apilayer.com/exchangerates_data/timeseries?apikey=${apiKey}&start_date=${start}&end_date=${end}&base=${currencyCode}`
    );

    return response.data;
});

export const timeSeriesCurrencySlice = createSlice({
    name: 'timeSeriesCurrency',
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
                state.error = action.error.message ?? 'Wystąpił błąd podczas ładowania artykułów.';
            });
    },
});

export const selectRates = (state: RootState) => state.timeSeriesCurrency.rates;
export const selectLoading = (state: RootState) => state.timeSeriesCurrency.loading;


export default timeSeriesCurrencySlice.reducer;
