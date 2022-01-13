import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces/user";
import { getAllModels, getModel } from "model/api/models";

interface IState {
  models: IUser[];
  oneModel: IUser[];
  search: string;
}

const initialState: IState = {
  models: [],
  oneModel: [],
  search: "",
};

export const getModels = createAsyncThunk(
  "models/getModels",
  async (searchQueryParam: string) => {
    const response = await getAllModels(searchQueryParam);
    return response;
  }
);

export const getOneModel = createAsyncThunk(
  "models/getModel",
  async (modelId: string) => {
    const response = await getModel(modelId);
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
    builder
      .addCase(getModels.fulfilled, (state, action) => {
        state.models = action.payload;
      })
      .addCase(getOneModel.fulfilled, (state, action) => {
        state.oneModel = action.payload;
      });
  },
});

export const modelsReducer = modelsSlice.reducer;
export const { setSearchQueryParam } = modelsSlice.actions;
