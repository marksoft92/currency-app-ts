import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
interface Currency {
    currency: string;
    rate: number; 
}

interface Currencies {
    base: string;
    date: string;
    rates: Currency[];
}

interface CurrencyState {
    list: Currencies[];
    loading: boolean;
    error: string | null;
}

const initialState: CurrencyState = {
    list: [],
    loading: false,
    error: null,
};

const axiosInstance = axios.create({
    maxRedirects: 0,
});

export const fetchCurrency = createAsyncThunk('currency/fetch', async () => {
    try {
        const response = await axiosInstance.get<any>(`https://api.apilayer.com/exchangerates_data/latest?apikey=${apiKey}&base=PLN`);
        const { base, date, rates } = response.data;

        // Wyjaśniamy TypeScriptowi, że `rate` jest liczbą
        const currencyRates: Currency[] = Object.entries(rates).map(([currency, rate]) => ({
            currency,
            rate: Number(rate), // Konwertujemy `rate` na liczbę
        }));

        const currencyData: Currencies = {
            base,
            date,
            rates: currencyRates,
        };
        return [currencyData];
    } catch (error) {
        throw error;
    }
});

export const currencySlice = createSlice({
    name: 'currency',
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
                state.error = action.error.message ?? 'Wystąpił błąd podczas ładowania państw.';
            });
    },
});

export const selectCurrency = (state: RootState) => state.currency.list;
export const selectLoading = (state: RootState) => state.currency.loading;

export default currencySlice.reducer;
