import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import breadSlice from "./slices/breadSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    bread: breadSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
