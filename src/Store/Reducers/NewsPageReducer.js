import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isError: { result: false },
  isLoading: false,
  newsPageData: [],
};

export const fetchNewsPage = createAsyncThunk(
  "newsPage/getNewsPage",

  async (data) => {
    let result = await axios
      .get(
        `http://mainserver.dealferov.ru/public/api/createx/news/${data.currentCategory}?page=${data.currentPage}`
      )
      .then((response) => response);

    return result;
  }
);

export const newsPageSlice = createSlice({
  name: "newsPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewsPage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNewsPage.fulfilled, (state, action) => {
      state.isLoading = false;

      state.newsPageData = action.payload.data;
    });
    builder.addCase(fetchNewsPage.rejected, (state, action) => {
      state.isLoading = false;
      state.isError.result = true;
      state.isError.code = action.error;
    });
  },
});

export default newsPageSlice.reducer;
