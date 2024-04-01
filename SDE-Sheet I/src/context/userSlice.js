import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false, // Initialize isLogin to false
    userData: {} // Initialize userData
  },
  reducers: {
    getUser: (state, action) => {
      state.userData = action.payload; // Update userData with the received data
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload; // Update isLogin state
    },
  },
});

export const { getUser, setIsLogin } = userSlice.actions;
export default userSlice.reducer;
