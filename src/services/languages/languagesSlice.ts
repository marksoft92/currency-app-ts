import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface LanguagesState {
  currentLanguage: string;
}

const initialState: LanguagesState = {
  currentLanguage: "en",
};

const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setCurrentLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setCurrentLanguage } = languagesSlice.actions;
export const selectLanguage = (state: RootState) =>
  state.languages.currentLanguage;
export default languagesSlice.reducer;
