import { v4 as uuidv4 } from "uuid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces/user";
import { loginUser } from "users/api/users";
import { toast } from "react-toastify";

const userId = uuidv4();
const userName = `user${userId.slice(0, 8)}`;

export const initialState: IUser = {
  userId: userId,
  userName: userName,
  userEmail: "",
  userTokens: 0,
  userRole: "USER",
  userModels: undefined,
};

export const login = createAsyncThunk("auth/logIn", async (values: any) => {
  return loginUser(values);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        toast("something went wrong");
        return initialState;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
