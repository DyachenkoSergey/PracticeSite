import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGetFilterModels } from "interfaces/model";
import { IUser } from "interfaces/user";
import { getAllModels } from "model/api/models";

interface IState {
  models: IUser[];
  search: { [key: string]: string[] };
  studioDefaultKey: string;
}
const initialState: IState = {
  models: [],
  search: {},
  studioDefaultKey: "StudioModels",
};
export const getModels = createAsyncThunk(
  "models/getModels",
  async ({ searchQueryParam, value }: IGetFilterModels) => {
    const response = await getAllModels({
      searchQueryParam,
      value,
    });
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
    setStudioDefaultKey(state, action) {
      state.studioDefaultKey = action.payload;
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
export const { setStudioDefaultKey } = modelsSlice.actions;
