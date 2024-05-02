import { configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./Reducers/MainPageReducer";
import servicePageSlice from "./Reducers/ServicePageReducer";

export const store = configureStore({
  reducer: {
    mainPage: mainPageSlice,
    servicePage: servicePageSlice,
  },
});
