import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./actions";

export enum AuthStatus {
  AUTHORIZED,
  UNAUTHORIZED,
}

interface AuthState {
  status: AuthStatus;
  error: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  status: AuthStatus.UNAUTHORIZED,
  error: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state = initialState;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    addCase(loginUser.fulfilled, (state) => {
      state.isLoading = false;
      state.status = AuthStatus.AUTHORIZED;
    });
    addCase(
      loginUser.rejected,
      (state, action: PayloadAction<{ message: string }>) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = AuthStatus.UNAUTHORIZED;
      }
    );
  },
});

export const { logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
