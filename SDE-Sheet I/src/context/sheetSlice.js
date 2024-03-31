import { createSlice } from "@reduxjs/toolkit";

export const sheetSlice = createSlice({
  name: "sheet",
  initialState: {
    sheet: {
      sheet: {
        topicId: "",
        topic: "",
        problem: [
          {
            problemId: "",
            title: "",
            status: "",
            difficulty: "",
            article: "",
            leetcode: "",
            gfg: "",
          },
        ],
        img: "",
        solved: "",
        totalQues: "",
        easy: "",
        medium: "",
        hard: "",
        overview: "",
      },
    },
  },
  reducers: {
    getTopicId: (state, action) => {
      state.sheet.topicId = action.payload.topicId;
    },
    getTopic: (state, action) => {
      state.sheet.topic = action.payload.topic;
    },
    getProblem: (state, action) => {
      state.sheet.problem = action.payload.problem;
    },
    getImg: (state, action) => {
      state.sheet.img = action.payload.img;
    },
    getSolved: (state, action) => {
      state.sheet.solved = action.payload.solved;
    },
    getTotalQues: (state, action) => {
      state.sheet.totalQues = action.payload.totalQues;
    },
    getEasy: (state, action) => {
      state.sheet.easy = action.payload.easy;
    },
    getMedium: (state, action) => {
      state.sheet.medium = action.payload.medium;
    },
    getHard: (state, action) => {
      state.sheet.hard = action.payload.hard;
    },
    getOverview: (state, action) => {
      state.sheet.overview = action.payload.overview;
    },
  },
});

export const {
  getTopicId,
  getTopic,
  getProblem,
  getImg,
  getSolved,
  getTotalQues,
  getEasy,
  getMedium,
  getHard,
  getOverview,
} = sheetSlice.actions;
export default sheetSlice.reducer;
