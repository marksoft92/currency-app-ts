import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countriesReducer from '../features/countries/countriesSLice';

import newsRecuer from '../features/news/newsSlice'
import languagesReducer from '../features/languages/languagesSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    news: newsRecuer,
    languages: languagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
