"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const UserSlice = createSlice({
  name: "user",
  initialState: {
    info: {},
    loading: false,
    loadingUpdate: false,
    openDialog: false,
    list: [],
    count: 0,
  },
  reducers: {
    setInfo: (state, action: PayloadAction<any>) => {
      state.info = action.payload || [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLoadingUpdate: (state, action: PayloadAction<boolean>) => {
      state.loadingUpdate = action.payload;
    },
    setList: (state, action: PayloadAction<any>) => {
      state.list = action.payload;
    },
    setOpenDialog: (state, action: PayloadAction<boolean>) => {
      state.openDialog = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});
