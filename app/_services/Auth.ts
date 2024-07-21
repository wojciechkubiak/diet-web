import axios, { AxiosError } from "axios";
import { Auth, IAuthService } from "../_models/Auth";
import { Token } from "../_models/Token";

export class AuthService implements IAuthService {
  async loginUser(
    loginFormData: Auth,
    rejectWithValue: (error: AxiosError) => void
  ): Promise<Token> {
    return await axios
      .post("/api/auth/login", loginFormData)
      .then((response) => response.data)
      .catch(({ response: { data } }) => rejectWithValue(data));
  }

  async registerUser(registerFormData: Auth): Promise<Token> {
    return await axios
      .post("/api/auth/register", registerFormData)
      .then((response) => response.data)
      .catch((error) => error);
  }
}
