import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

interface Currency {
    currency: string;
    rate: number; // Określamy tutaj, że `rate` jest typem number
}

interface Currencies {
    base: string;
    date: string;
    rates: Currency[];
}

interface CountriesState {
    list: Currencies[];
    loading: boolean;
    error: string | null;
}

const initialState: CountriesState = {
    list: [],
    loading: false,
    error: null,
};

const axiosInstance = axios.create({
    maxRedirects: 0,
});

export const fetchCountries = createAsyncThunk('currency/fetch', async () => {
    try {
        const response = await axiosInstance.get<any>('https://api.apilayer.com/exchangerates_data/latest?apikey=dLE4c1ar5VRw2YegPLCYYI8Uuh1ng5ep&base=PLN');
        const { base, date, rates } = response.data;

        // Wyjaśniamy TypeScriptowi, że `rate` jest liczbą
        const currencyRates: Currency[] = Object.entries(rates).map(([currency, rate]) => ({
            currency,
            rate: Number(rate), // Konwertujemy `rate` na liczbę
        }));

        const countryData: Currencies = {
            base,
            date,
            rates: currencyRates,
        };
        return [countryData];
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
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Wystąpił błąd podczas ładowania państw.';
            });
    },
});

export const selectCountries = (state: RootState) => state.currency.list;
export const selectLoading = (state: RootState) => state.currency.loading;

export default currencySlice.reducer;
