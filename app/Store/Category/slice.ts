"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const categorySlice = createSlice({
  name: "category",
  initialState: {
    listCategory: [],
    loadingUpdateCategory: false,
    loading: false,
    description: [],
    openDialog: false,
    selected: {
      type: "create",
    },
  },
  reducers: {
    setListCategory: (state, action: PayloadAction<any>) => {
      state.listCategory = action.payload || [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLoadingUpdateCategory: (state, action: PayloadAction<boolean>) => {
      state.loadingUpdateCategory = action.payload;
    },
    setSelected: (state, action: PayloadAction<any>) => {
      state.selected = action.payload;
    },
    setDescription: (state, action: PayloadAction<any>) => {
      state.description = action.payload;
    },
    setOpenDialog: (state, action: PayloadAction<any>) => {
      state.openDialog = action.payload;
    },
  },
});
