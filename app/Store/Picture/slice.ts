"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const pictureSlice = createSlice({
  name: "picture",
  initialState: {
    listAlbum: [],
    listPicture: [],
    loading: false,
    uploaded: false,
    loadingUpdate: false,
    openDialog: {},
    listToDeleted: [],
  },
  reducers: {
    setListAlbum: (state, action: PayloadAction<any>) => {
      state.listAlbum = action.payload || [];
    },
    setListPicture: (state, action: PayloadAction<any>) => {
      state.listPicture = action.payload || [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUploaded: (state, action: PayloadAction<boolean>) => {
      state.uploaded = action.payload;
    },
    setOpenDialog: (state, action: PayloadAction<any>) => {
      state.openDialog = action.payload;
    },
    setListToDeleted: (state, action: PayloadAction<any>) => {
      state.listToDeleted = action.payload;
    },
    setLoadingUpdate: (state, action: PayloadAction<any>) => {
      state.loadingUpdate = action.payload;
    },
  },
});
