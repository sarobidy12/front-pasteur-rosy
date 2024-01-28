"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const EventSlice = createSlice({
  name: "event",
  initialState: {
    listEvent: [],
    description: [],
    loadingListEventCategory: false,
    loading: false,
    selected: {
      type: "create",
    },
    openDialog: false,
  },
  reducers: {
    setListEvent: (state, action: PayloadAction<any>) => {
      state.listEvent = action.payload || [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLoadingListEventCategory: (state, action: PayloadAction<boolean>) => {
      state.loadingListEventCategory = action.payload;
    },
    setSelected: (state, action: PayloadAction<any>) => {
      state.selected = action.payload;
    },
    setDescription: (state, action: PayloadAction<any>) => {
      state.description = action.payload || [];
    },
    setOpenDialog: (state, action: PayloadAction<boolean>) => {
      state.openDialog = action.payload;
    },
  },
});
