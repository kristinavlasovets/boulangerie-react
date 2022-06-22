import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sort: {
        name: 'popularity',
        sortProperty: 'rating'
    },
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log(action, 'is action setCategoryId');
            state.categoryId = action.payload
        },
    },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
 
