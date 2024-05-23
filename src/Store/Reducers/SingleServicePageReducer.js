import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isError: { result: false },
  isLoading: false,
  singleServicePageData: [],
};

export const fetchSingleServicePage = createAsyncThunk(
  "singleServicePage/getSingleServicePage",

  async (id) => {
    let result = await axios
      .get(`http://mainserver.dealferov.ru/public/api/createx/service/${id}`)
      .then((response) => response);

    return result;
  }
);
export const serviceSinglePageSlice = createSlice({
  name: "serviceSinglePage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleServicePage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleServicePage.fulfilled, (state, action) => {
      state.isLoading = false;

      state.singleServicePageData = action.payload.data;
    });
    builder.addCase(fetchSingleServicePage.rejected, (state, action) => {
      state.isLoading = false;
      state.isError.result = true;
      state.isError.code = action.error;
    });
  },
});

export default serviceSinglePageSlice.reducer;
