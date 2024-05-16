import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isError: { result: false },
  isLoading: false,
  aboutPageData: [],
};

export const fetchAboutPAge = createAsyncThunk(
  "aboutPage/getAboutPage",

  async () => {
    let result = await axios
      .get("http://127.0.0.1:8000/api/createx/about")
      .then(function (response) {
        return response;
      });

    return result;
  }
);

export const aboutPageSlice = createSlice({
  name: "aboutPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAboutPAge.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAboutPAge.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError.result = false;
      state.aboutPageData = action.payload.data;
    });
    builder.addCase(fetchAboutPAge.rejected, (state, action) => {
      state.isLoading = false;
      state.isError.result = true;
      state.isError.code = action.error;
    });
  },
});

export default aboutPageSlice.reducer;
