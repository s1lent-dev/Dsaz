import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "Paresh",
      profilepic: "/Images/PFP 1.jpg",
      email: "deshpande.pxresh@gmail.com",
    },
  },
  reducers: {
    getName: (state, action) => {
      state.user.name = action.payload.name;
    },
    getEmail: (state, action) => {
      state.user.email = action.payload.email;
    },
    getProfilepic: (state, action) => {
      state.user.profilepic = action.payload.profilepic;
    },
    updateName: (state, action) => {
      state.user.name = action.payload.name;
    },
    updateEmail: (state, action) => {
      state.user.email = action.payload.email;
    },
    updateProfilepic: (state, action) => {
      state.user.profilepic = action.payload.profilepic;
    },
  },
});

export const {
  getName,
  getEmail,
  getProfilepic,
  updateName,
  updateEmail,
  updateProfilepic,
} = userSlice.actions;
export default userSlice.reducer;
