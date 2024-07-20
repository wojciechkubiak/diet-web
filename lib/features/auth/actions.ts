import { createAsyncThunk } from "@reduxjs/toolkit";

import { Token } from "@/lib/models/Token";
import { AppThunkApiConfig } from "@/lib/store";
import { Auth } from "@/lib/models/Auth";

export const loginUser = createAsyncThunk<Token, Auth, AppThunkApiConfig>(
  "loginUser",
  async (authData, { extra }) => extra.authService.loginUser(authData)
);

export const registerUser = createAsyncThunk<Token, Auth, AppThunkApiConfig>(
  "registerUser",
  async (authData, { extra }) => extra.authService.registerUser(authData)
);
