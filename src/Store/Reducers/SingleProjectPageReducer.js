import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isError: { result: false },
  isLoading: false,
  SingleProjectData: [],
};

export const fetchSingleProjectPage = createAsyncThunk(
  "singleProjectPage/getSingleProjectPage",

  async (id) => {
    let result = await axios
      .get(`http://mainserver.dealferov.ru/public/api/createx/work/${id}`)
      .then((response) => response);

    return result;
  }
);

export const singleProjectPageSlice = createSlice({
  name: "singleProjectPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProjectPage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleProjectPage.fulfilled, (state, action) => {
      state.isLoading = false;

      state.SingleProjectData = action.payload.data;
    });
    builder.addCase(fetchSingleProjectPage.rejected, (state, action) => {
      state.isLoading = false;
      state.isError.result = true;
      state.isError.code = action.error;
    });
  },
});

export default singleProjectPageSlice.reducer;
