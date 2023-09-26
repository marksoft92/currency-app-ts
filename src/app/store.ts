import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import currencySlice from '../features/currencyList/currencyListSice';

import newsRecuer from '../features/ratesListCurrency/newsSlice'
import languagesReducer from '../features/languages/languagesSlice';

export const store = configureStore({
  reducer: {
    currency: currencySlice,
    timeSeriesCurrency: newsRecuer,
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
