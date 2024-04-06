import { createSlice } from "@reduxjs/toolkit";

export const sheetSlice = createSlice({
  name: "sheet",
  initialState: 
  { 
    totalQuestions: JSON.parse(localStorage.getItem("totalQuestions")) || { totalQues: 0, solved: 0, solvedEasy: 0, solvedMedium: 0, solvedHard: 0, totalEasy: 0, totalMedium: 0, totalHard: 0 },
    topicId: JSON.parse(localStorage.getItem("topicId")) || 0,
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
    setIsTopicId: (state, action) => {
      state.topicId = action.payload;
    },
    setTotalSolved: (state, action) => {
      state.totalQuestions = action.payload;
    },
}
});

export const {
  setSheetData,
  setIsLoading,
  setIsError,
  setIsTopicId,
  setTotalSolved
} = sheetSlice.actions;

export default sheetSlice.reducer;
