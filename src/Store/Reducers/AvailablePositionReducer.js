import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isError: { result: false },
  isLoading: false,
  positionPageData: [1222],
};

export const fetchPositionPAge = createAsyncThunk(
  "positionPage/getPositionPage",

  async () => {
    let result = await axios
      .get("http://mainserver.dealferov.ru/public/api/createx/position")
      .then(function (response) {
        return response;
      });

    return result;
  }
);

export const positionPageSlice = createSlice({
  name: "positionPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPositionPAge.pending, (state, action) => {
      // console.log(action);
      state.isLoading = true;
    });
    builder.addCase(fetchPositionPAge.fulfilled, (state, action) => {
      // console.log("-->", action);
      state.isLoading = false;
      state.isError.result = false;
      state.positionPageData = action.payload.data;
    });
    builder.addCase(fetchPositionPAge.rejected, (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.isError.result = true;
      state.isError.code = action.error;
    });
  },
});

export default positionPageSlice.reducer;
