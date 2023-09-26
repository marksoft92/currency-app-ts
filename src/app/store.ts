import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import currencySlice from "../containers/currencyList/currencyListSlice";
import newsRecuer from "../containers/ratesListCurrency/timeSeriesSlice";
import languagesReducer from "../services/languages/languagesSlice";

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
