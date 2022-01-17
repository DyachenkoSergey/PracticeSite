import { v4 as uuidv4 } from "uuid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces/user";
import { logInUser, logOutUser } from "users/api/users";

export const initialState: IUser = {
  userId: uuidv4(),
  userName: "quest",
  userEmail: "",
  userTokens: 0,
  userRole: "USER",
  userModels: undefined,
};

export const logIn = createAsyncThunk("auth/logIn", async (values: any) => {
  return logInUser(values);
});

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (userId: string) => {
    return logOutUser(userId);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        return initialState;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        return initialState;
      });
  },
});

export const authReducer = authSlice.reducer;
