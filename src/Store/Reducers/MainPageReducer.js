import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isError: { result: false },
  isLoading: false,
  mainPageData: [],
};

export const fetchMainPAge = createAsyncThunk(
  "mainPage/getMainPage",

  async () => {
    let result = await axios
      .get("http://127.0.0.1:8000/api/createx")
      .then(function (response) {
        // handle success
        return response;
        console.log(response);
      });

    console.log(result);

    return result;
  }
);

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMainPAge.pending, (state, action) => {
      console.log(action);
      state.isLoading = true;
    });
    builder.addCase(fetchMainPAge.fulfilled, (state, action) => {
      console.log("-->", action);
      state.isLoading = false;
      state.isError.result = false;
      state.mainPageData = action.payload.data;
    });
    builder.addCase(fetchMainPAge.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isError.result = true;
      state.isError.code = action.error;
    });
  },
});

export default mainPageSlice.reducer;