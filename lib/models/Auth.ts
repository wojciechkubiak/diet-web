import { Token } from "./Token";

export interface Auth {
  username: string;
  password: string;
}

export interface IAuthService {
  loginUser: (loginData: Auth) => Promise<Token>;
  registerUser: (registerData: Auth) => Promise<Token>;
}
