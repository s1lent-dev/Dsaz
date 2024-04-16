import { configureStore } from "@reduxjs/toolkit";
import sheetSlice from "./sheetSlice";
import userSlice from "./userSlice";
import singleSheetSlice from "./singleSheetSlice";
import TopicSlice from "./TopicSlice";
export const store = configureStore({
    reducer: {Topics: TopicSlice, singleSheet: singleSheetSlice, sheet: sheetSlice, user: userSlice},
});