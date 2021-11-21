import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces/user";
import { getOneUser, logOutUser } from "users/api/users";

const initialState: IUser = {
  userId: "",
  userName: "",
  userRole: "user",
  userPassword: "",
  userEmail: "",
  userTokens: 0,
};

export const logOut = createAsyncThunk("auth/logOut", async () => {
  return logOutUser();
});

export const login = createAsyncThunk("auth/logIn", async (values: any) => {
  return getOneUser(values);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
