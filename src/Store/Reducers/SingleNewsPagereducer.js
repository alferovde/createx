import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isError: { result: false },
  isLoading: false,
  singleNewsPageData: [],
};

export const fetchSingleNewsPage = createAsyncThunk(
  "singleNewsPage/getSingleNewsPage",

  async (id) => {
    let result = await axios
      .get(`http://mainserver.dealferov.ru/public/api/createx/news_id/${id}`)
      .then((response) => response);

    return result;
  }
);

export const singleNewsPageSlice = createSlice({
  name: "singleNewsPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleNewsPage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleNewsPage.fulfilled, (state, action) => {
      state.isLoading = false;

      state.singleNewsPageData = action.payload.data;
    });
    builder.addCase(fetchSingleNewsPage.rejected, (state, action) => {
      state.isLoading = false;
      state.isError.result = true;
      state.isError.code = action.error;
    });
  },
});

export default singleNewsPageSlice.reducer;
