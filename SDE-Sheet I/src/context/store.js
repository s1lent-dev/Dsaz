import { configureStore } from "@reduxjs/toolkit";
import sheetSlice from "./sheetSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {sheet: sheetSlice, user: userSlice},
});