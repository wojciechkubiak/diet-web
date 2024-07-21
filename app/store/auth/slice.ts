import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./actions";
import { Auth } from "@/app/models/Auth";

export enum AuthStatus {
  AUTHORIZED,
  UNAUTHORIZED,
}

interface AuthState {
  auth: Auth;
  status: AuthStatus;
  error: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  auth: {
    username: "",
    password: "",
  },
  status: AuthStatus.UNAUTHORIZED,
  error: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuthData(state, action: PayloadAction<Partial<Auth>>) {
      state.auth = {
        ...state.auth,
        ...action.payload,
      };
      state.error = "";
    },
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

export const { changeAuthData, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
