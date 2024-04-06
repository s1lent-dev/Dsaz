import { createSlice } from "@reduxjs/toolkit";


export const TopicSlice = createSlice({
  name: "Topics",
  initialState: 
  { 
    topicsData: JSON.parse(localStorage.getItem("allTopics")) || [],
    topic : " ",
    isHomepage: true,
  },

  reducers: {
    setTopicsData: (state, action) => {
      state.topicsData = action.payload;
    },
    setTopic: (state, action) => {
      state.topic = action.payload;
    },
    setIsHomepage: (state, action) => {
      state.isHomepage = action.payload;
    },
}
});

export const {
  setTopicsData,
  setTopic,
  setIsHomepage,
} = TopicSlice.actions;

export default TopicSlice.reducer;
