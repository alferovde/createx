import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isError: { result: false },
  isLoading: false,
  workPageData: [],
  projectArray: [],
  isErrorProjectArray: { result: false },
  isLoadingProjectArray: false,
};
export const fetchWorkPage = createAsyncThunk(
  "workPage/getWorPage",

  async () => {
    let result = await axios
      .get(`http://127.0.0.1:8000/api/createx/works`)
      .then((response) => response);

    return result;
  }
);

export const fetchWorkPageServiceId = createAsyncThunk(
  "workPage/getWorPageListId",

  async (value) => {
    let result = await axios
      .get(
        `http://127.0.0.1:8000/api/createx/works/${value.type}?limit=${value.limit}`
      )
      .then((response) => response);

    return result;
  }
);

export const workPageSlice = createSlice({
  name: "workPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWorkPage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWorkPage.fulfilled, (state, action) => {
      state.isLoading = false;

      state.workPageData = action.payload.data;
    });
    builder.addCase(fetchWorkPage.rejected, (state, action) => {
      state.isLoading = false;
      state.isError.result = true;
      state.isError.code = action.error;
    });

    builder.addCase(fetchWorkPageServiceId.pending, (state, action) => {
      state.isLoadingProjectArray = true;
    });
    builder.addCase(fetchWorkPageServiceId.fulfilled, (state, action) => {
      state.isLoadingProjectArray = false;

      // console.log("--->", action.payload.data);
      state.projectArray = action.payload.data;
    });
    builder.addCase(fetchWorkPageServiceId.rejected, (state, action) => {
      state.isLoadingProjectArray = false;

      state.isErrorProjectArray.result = true;
      state.isErrorProjectArray.code = action.error;
    });
  },
});

export default workPageSlice.reducer;
