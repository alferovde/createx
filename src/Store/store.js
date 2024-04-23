import { configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./Reducers/MainPageReducer";

export const store = configureStore({
  reducer: {
    mainPage: mainPageSlice,
  },
});
