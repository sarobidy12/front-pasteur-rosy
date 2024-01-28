"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const podcastSlice = createSlice({
  name: "category",
  initialState: {
    listPodcast: [],
    loadingUpdate: false,
    loading: false,
    openDialog: false,
    selected: {
      type: "create",
    },
  },
  reducers: {
    setListPodcast: (state, action: PayloadAction<any>) => {
      state.listPodcast = action.payload || [];
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
