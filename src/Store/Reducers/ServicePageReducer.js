import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isError: { result: false },
  isLoading: false,
  servicePageData: [],
};

export const fetchServicePage = createAsyncThunk(
  "servicePage/getServicePage",

  async () => {
    let result = await axios
      .get("http://mainserver.dealferov.ru/public/api/createx/services")
      .then((response) => response);

    return result;
  }
);

export const servicePageSlice = createSlice({
  name: "servicePage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServicePage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchServicePage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.servicePageData = action.payload.data;
    });
    builder.addCase(fetchServicePage.rejected, (state, action) => {
      state.isLoading = false;
      state.isError.result = true;
      state.isError.code = action.error;
    });
  },
});

export default servicePageSlice.reducer;
