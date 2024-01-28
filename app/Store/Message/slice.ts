"use client"; //this is a client side component
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const MessageSlice = createSlice({
  name: "message",
  initialState: {
    listMessage: [],
    listUserConnected: [],
  },
  reducers: {
    setListMessage: (state, action: PayloadAction<any[]>) => {
      state.listMessage = action.payload || [];
    },
    pushMessage: (state, action: PayloadAction<any>) => {
      const lasted = [...state.listMessage];
      state.listMessage = [...state.listMessage, { ...action.payload }];
    },
    setListUserConnected: (state, action: PayloadAction<any[]>) => {
      state.listUserConnected = action.payload;
    },
  },
});
