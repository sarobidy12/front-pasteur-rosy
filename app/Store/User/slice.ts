"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const UserSlice = createSlice({
  name: "user",
  initialState: {
    info: {},
    loading: false,
  },
  reducers: {
    setInfo: (state, action: PayloadAction<any>) => {
      state.info = action.payload || [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
