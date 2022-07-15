import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";

export const fetchBread = createAsyncThunk<Bread[], Record<string, string>>(
  "bread/fetchBreadStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Bread[]>(
      `https://62a72131bedc4ca6d7c2c681.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);

type Bread = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  weight: number[];
  types: number[];
  rating: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface BreadSliceState {
  items: Bread[];
  status: Status;
}

const initialState: BreadSliceState = {
  items: [],
  status: Status.LOADING,
};

const breadSlice = createSlice({
  name: "bread",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBread.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchBread.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchBread.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
  // extraReducers: {
  //   [fetchBread.pending]: (state) => {
  //     state.status = "loading";
  //     state.items = [];
  //   },
  //   [fetchBread.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = "success";
  //   },
  //   [fetchBread.rejected]: (state) => {
  //     state.items = [];
  //     state.status = "error";
  //   },
  // },
});

export const selectBreadData = (state: RootState) => state.bread;

export const { setItems } = breadSlice.actions;

export default breadSlice.reducer;
