import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type ViewState = 'list' | 'tiles';

interface Sort {
    view: ViewState;
}

const initialState: Sort = {
    view: 'list',
};

const viewSort = createSlice({
    name: 'news',
    initialState,
    reducers: {
        changeView(state, action: PayloadAction<ViewState>) {
            state.view = action.payload;
        },
    },
});
export const getSelectView = (state: RootState) => state.view;
export const { changeView } = viewSort.actions;
export default viewSort.reducer;
