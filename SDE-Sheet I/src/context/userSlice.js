import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
    userData: JSON.parse(localStorage.getItem("userData")) || {},
  },
  reducers: {
    getUser: (state, action) => {
      state.userData = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    logoutUser: (state) => {
      state.isLogin = false;
      state.userData = {};
    },
  },
});


export const { getUser, setIsLogin, logoutUser } = userSlice.actions;
export default userSlice.reducer;
