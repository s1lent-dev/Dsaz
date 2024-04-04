import { createSlice } from "@reduxjs/toolkit";

export const singleSheetSlice = createSlice({
  name: "singleSheet",
  initialState: {
    isLoading: JSON.parse(localStorage.getItem("isLoading")) || false,
    sheetData: JSON.parse(localStorage.getItem("singleSheetData")) || {},
    singleSheetData: JSON.parse(localStorage.getItem("singlesheetdata")) || {},
    isError: JSON.parse(localStorage.getItem("isError")) || false,
  },
  reducers: {
    setSingleSheetData: (state, action) => {
      state.sheetData = action.payload;
    },
    setsinglesheetdata: (state, action) => {
      state.singleSheetData = action.payload;
    },
    setisLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setisError: (state, action) => {
      state.isError = action.payload;
    } 
  },
});

export const {
  setSingleSheetData,
  setisLoading,
  setisError,
  setsinglesheetdata,
} = singleSheetSlice.actions;

export default singleSheetSlice.reducer;
