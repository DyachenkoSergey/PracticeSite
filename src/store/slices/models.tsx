import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces/user";
import { getAllModels } from "model/api/models";

interface IState {
  models: IUser[];
  search: string;
}

const initialState: IState = {
  models: [],
  search: "",
};

export const getModels = createAsyncThunk(
  "models/getModels",
  async (searchQueryParam: string) => {
    const response = await getAllModels(searchQueryParam);
    return response;
  }
);

export const modelsSlice = createSlice({
  name: "models",
  initialState,
  reducers: {
    setSearchQueryParam(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getModels.fulfilled, (state, action) => {
      state.models = action.payload;
    });
  },
});

export const modelsReducer = modelsSlice.reducer;
export const { setSearchQueryParam } = modelsSlice.actions;
