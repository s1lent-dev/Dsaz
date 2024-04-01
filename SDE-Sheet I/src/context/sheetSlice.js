import { createSlice } from "@reduxjs/toolkit";

export const sheetSlice = createSlice({
  name: "sheet",
  initialState: [],
  reducers: {
    setSheetData: (state, action) => {
      return action.payload; 
    },
  },
});

export const {
  setSheetData,
} = sheetSlice.actions;

export default sheetSlice.reducer;
