import { createSlice } from "@reduxjs/toolkit";

export const singleSheetSlice = createSlice({
  name: "singleSheet",
  initialState: {},
  reducers: {
    setSingleSheetData: (state, action) => {
      return action.payload; 
    },
  },
});

export const {
  setSingleSheetData,
} = singleSheetSlice.actions;

export default singleSheetSlice.reducer;
