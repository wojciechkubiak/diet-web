import { AxiosError } from "axios";
import { Token } from "./Token";

export interface Auth {
  username: string;
  password: string;
}

export interface IAuthService {
  loginUser: (
    loginFormData: Auth,
    rejectWithValue: (error: AxiosError) => void
  ) => Promise<Token>;
  registerUser: (registerData: Auth) => Promise<Token>;
}
