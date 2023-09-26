import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { getStartAndEndDate } from '../../utils/helpers';


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

export const fetchNews = createAsyncThunk('timeseries/fetch', async (currencyCode: string | undefined) => {
    const response = await axios.get<ExchangeRate>(
        `https://api.apilayer.com/exchangerates_data/timeseries?apikey=dLE4c1ar5VRw2YegPLCYYI8Uuh1ng5ep&start_date=${start}&end_date=${end}&base=${currencyCode}`
    );

    return response.data;
});

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.rates = action.payload.rates;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Wystąpił błąd podczas ładowania artykułów.';
            });
    },
});

export const selectArticles = (state: RootState) => state.news.rates;
export const selectLoading = (state: RootState) => state.news.loading;


export default newsSlice.reducer;
