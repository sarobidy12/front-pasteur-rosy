"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const BiographySlice = createSlice({
  name: "biography",
  initialState: {
    loadingUpdate: false,
    loading: false,
    content: null,
    id: null,
  },
  reducers: {
    setContent: (state, action: PayloadAction<any>) => {
      state.content = action.payload || [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLoadingUpdate: (state, action: PayloadAction<boolean>) => {
      state.loadingUpdate = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});
