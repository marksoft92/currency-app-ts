import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';


export interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
    source: {
        id: string | null;
        name: string;
    };
    content: string
}

interface NewsState {
    articles: Article[];
    selectedArticle: Article | null;
    loading: boolean;
    error: string | null;
}

const initialState: NewsState = {
    articles: [],
    selectedArticle: null,
    loading: false,
    error: null,
};

export const fetchNews = createAsyncThunk('news/fetch', async (countryCode: string | undefined) => {
    const response = await axios.get<{ articles: Article[] }>(
        `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=e4062ceaa3da425780f99583b44ada14`
    );
    return response.data.articles;
});

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        selectArticle(state, action: PayloadAction<Article>) {
            state.selectedArticle = action.payload;
        },
        clearSelectedArticle(state) {
            state.selectedArticle = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Wystąpił błąd podczas ładowania artykułów.';
            });
    },
});

export const selectArticles = (state: RootState) => state.news.articles;
export const selectLoading = (state: RootState) => state.news.loading;
export const selectSelectedArticle = (state: RootState) => state.news.selectedArticle;

export const {
    selectArticle,
    clearSelectedArticle,
} = newsSlice.actions;

export default newsSlice.reducer;
