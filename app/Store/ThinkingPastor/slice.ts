"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const thinkingPastorSlice = createSlice({
  name: "thinkingPastor",
  initialState: {
    listQuestionAsking: [],
    loadingUpdate: false,
    loading: false,
    description: [],
    openDialog: false,
    selected: {},
    answered: false,
  },
  reducers: {
    // setListQuestion: (state, action: PayloadAction<any>) => {
    //   console.log("action.payload", action.payload);
    //   state.listQuestion =  [];
    // },
    setListQuestionAsking: (state, action: PayloadAction<any[]>) => {
      state.listQuestionAsking = action.payload;
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
    setDescription: (state, action: PayloadAction<any>) => {
      state.description = action.payload;
    },
    setOpenDialog: (state, action: PayloadAction<any>) => {
      state.openDialog = action.payload;
    },
  },
});
