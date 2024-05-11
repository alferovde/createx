import { configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./Reducers/MainPageReducer";
import servicePageSlice from "./Reducers/ServicePageReducer";
import serviceSinglePageSlice from "./Reducers/SingleServicePageReducer";
import workPageSlice from "./Reducers/WorkPageReducer";
import SingleProjectPageReducer from "./Reducers/SingleProjectPageReducer";
import aboutPageSlice from "./Reducers/AboutPageReducer";
import positionPageSlice from "./Reducers/AvailablePositionReducer";
export const store = configureStore({
  reducer: {
    mainPage: mainPageSlice,
    servicePage: servicePageSlice,
    serviceSinglePage: serviceSinglePageSlice,
    workPage: workPageSlice,
    projectSinglePage: SingleProjectPageReducer,
    aboutPage: aboutPageSlice,
    positionPage: positionPageSlice,
  },
});
