import { createAsyncThunk } from "@reduxjs/toolkit";

import { Token } from "@/app/models/Token";
import { AppThunkApiConfig } from "../store";
import { Auth } from "@/app/models/Auth";

export const loginUser = createAsyncThunk<Token, Auth, AppThunkApiConfig>(
  "loginUser",
  async (authData, { extra, rejectWithValue }) =>
    extra.authService.loginUser(authData, rejectWithValue)
);

export const registerUser = createAsyncThunk<Token, Auth, AppThunkApiConfig>(
  "registerUser",
  async (authData, { extra }) => extra.authService.registerUser(authData)
);
