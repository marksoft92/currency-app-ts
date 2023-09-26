export interface RateInfo {
    [currency: string]: number;
}

export interface ExchangeRate {
    loading: boolean;
    error: string | null;
    rates: { [date: string]: RateInfo };
}