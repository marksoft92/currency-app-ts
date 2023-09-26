export interface Currency {
    currency: string;
    rate: number; 
}

export interface ApiResponse {
    base: string;
    date: string;
    rates: Currency[];
}

export interface CurrencyState {
    list: ApiResponse[];
    loading: boolean;
    error: string | null;
}