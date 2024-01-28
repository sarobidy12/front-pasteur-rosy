"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const discoverSlice = createSlice({
  name: "discover",
  initialState: {
    selected: {
      type: "create",
    },
    description: [],
    list: [],
    loadingUpdated: false,
    loading: false,
    openDialog: false,
  },
  reducers: {
    setList: (state, action: PayloadAction<any>) => {
      state.list = action.payload || [];
    },
    setSelected: (state, action: PayloadAction<any>) => {
      state.selected = action.payload || [];
    },
    setDescription: (state, action: PayloadAction<any>) => {
      state.description = action.payload || [];
    },
    setLoadingUpdated: (state, action: PayloadAction<boolean>) => {
      state.loadingUpdated = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setOpenDialog: (state, action: PayloadAction<boolean>) => {
      state.openDialog = action.payload;
    },
  },
});
