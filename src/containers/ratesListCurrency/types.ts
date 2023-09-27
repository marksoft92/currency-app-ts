export interface RateInfo {
  [currency: string]: number;
}
export interface RatesTimeSeries {
  [date: string]: RateInfo;
}
export interface ExchangeRate {
  loading: boolean;
  error: string | null;
  rates: RatesTimeSeries;
}
