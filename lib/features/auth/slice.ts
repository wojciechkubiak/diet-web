import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./actions";
import { Auth } from "@/lib/models/Auth";

interface AuthState {
  auth: Auth;
  isLoading: boolean;
}

const initialState: AuthState = {
  auth: {
    username: "",
    password: "",
  },
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuthData(state, action: PayloadAction<Partial<Auth>>) {
      console.log(action.payload);
      state.auth = { ...state.auth, ...action.payload };
    },
    logOut(state) {
      state = initialState;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    addCase(loginUser.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
    });
    addCase(loginUser.rejected, (state, { error }) => {
      state.isLoading = false;
    });
  },
});

export const { changeAuthData, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
