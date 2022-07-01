import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBread = createAsyncThunk(
  "bread/fetchBreadStatus",
  async (params) => {
    const { currentPage, sortBy, order, category, search } = params;

    const { data } = await axios.get(
      `https://62a72131bedc4ca6d7c2c681.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading", //loading, success, error
};

const breadSlice = createSlice({
  name: "bread",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchBread.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchBread.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchBread.rejected]: (state, action) => {
      state.items = [];
      state.status = "error";
    },
  },
});

export const { setItems } = breadSlice.actions;

export default breadSlice.reducer;
