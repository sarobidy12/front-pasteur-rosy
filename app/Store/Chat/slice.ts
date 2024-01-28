"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    listChat: [],
    loadingUpdate: false,
    loading: false,
    openDialog: false,
    selected: {
      type: "create",
    },
  },
  reducers: {
    setListChat: (state, action: PayloadAction<any>) => {
      state.listChat = action.payload || [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLoadingUpdate: (state, action: PayloadAction<boolean>) => {
      state.loadingUpdate = action.payload;
    },
    setSelected: (state, action: PayloadAction<any>) => {
      state.selected = action.payload;
    },
    setOpenDialog: (state, action: PayloadAction<any>) => {
      state.openDialog = action.payload;
    },
  },
});
