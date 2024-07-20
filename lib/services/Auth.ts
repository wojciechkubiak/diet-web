import axios from "axios";
import { Auth, IAuthService } from "../models/Auth";
import { Token } from "../models/Token";

export class AuthService implements IAuthService {
  async loginUser(loginFormData: Auth): Promise<Token> {
    return axios
      .post("/api/auth/login", loginFormData)
      .then((response) => response.data)
      .catch((error) => error);
  }

  async registerUser(registerFormData: Auth): Promise<Token> {
    return axios
      .post("/api/auth/register", registerFormData)
      .then((response) => response.data)
      .catch((error) => error);
  }
}
