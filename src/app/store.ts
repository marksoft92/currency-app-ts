import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import currencyListReducer from "../containers/currencyList/currencyListSlice";
import timeSeriesReducer from "../containers/ratesListCurrency/timeSeriesSlice";
import languagesReducer from "../services/languages/languagesSlice";

export const store = configureStore({
  reducer: {
    currency: currencyListReducer,
    timeSeriesCurrency: timeSeriesReducer,
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
