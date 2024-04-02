import { configureStore } from "@reduxjs/toolkit";
import sheetSlice from "./sheetSlice";
import userSlice from "./userSlice";
import singleSheetSlice from "./singleSheetSlice";

export const store = configureStore({
    reducer: {singleSheet: singleSheetSlice, sheet: sheetSlice, user: userSlice},
});