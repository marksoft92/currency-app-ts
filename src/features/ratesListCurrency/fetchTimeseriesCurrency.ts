import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ExchangeRate } from './types';
import { getStartAndEndDate } from '../../utils/helpers';
export const apiKey = process.env.REACT_APP_API_KEY;
const { start, end } = getStartAndEndDate();

export const fetchTimeseriesCurrency = createAsyncThunk('timeseries/fetch', async (currencyCode: string | undefined) => {
    const response = await axios.get<ExchangeRate>(
        `https://api.apilayer.com/exchangerates_data/timeseries?apikey=${apiKey}&start_date=${start}&end_date=${end}&base=${currencyCode}`
    );

    return response.data;
});
