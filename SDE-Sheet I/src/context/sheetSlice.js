import { createSlice } from "@reduxjs/toolkit";

export const sheetSlice = createSlice({
  name: "sheet",
  initialState: 
  { 
    isLoading: JSON.parse(localStorage.getItem("isLoading")) || false,
    sheetData: JSON.parse(localStorage.getItem("sheetData")) || [],
    isError: JSON.parse(localStorage.getItem("isError")) || false,
  },

  reducers: {
    setSheetData: (state, action) => {
      state.sheetData = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
}
});

export const {
  setSheetData,
  setIsLoading,
  setIsError
} = sheetSlice.actions;

export default sheetSlice.reducer;
