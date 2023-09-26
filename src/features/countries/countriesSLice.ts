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

export const fetchCountries = createAsyncThunk('countries/fetch', async () => {
    try {
        const response = await axiosInstance.get<any>('http://api.exchangeratesapi.io/v1/timeseries?access_key=b8a256b869273cf17d0e084579c05843&start_date=2012-05-01&end_date=2012-05-03');
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

export const countriesSlice = createSlice({
    name: 'countries',
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

export const selectCountries = (state: RootState) => state.countries.list;
export const selectLoading = (state: RootState) => state.countries.loading;

export default countriesSlice.reducer;
