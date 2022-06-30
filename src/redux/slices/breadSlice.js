import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const breadSlice = createSlice({
    name: "bread",
    initialState,
    reducers: {
        setItems(state, action) {

        },
    },
});

export const { setItems } = breadSlice.actions;

export default breadSlice.reducer;
