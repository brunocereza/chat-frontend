import { axiosRequest } from "@/axios/axiosConfig";
import { login } from "@/shared/types/login";
import { IAuth } from "./type";

const URLBASE = process.env.URLBASE;

class Auth implements IAuth {
  public async login({ password, username }: login): Promise<Login> {
    try {
      const { access_token, user } = await axiosRequest.login({
        username,
        password,
      });

      return {
        user,
        access_token,
      };
    } catch (error) {
      console.log(error, "error");
      throw error;
    }
  }

  public async generateGenericToken(): Promise<string> {
    const token = await axiosRequest.genericToken();
    return token;
  }

  public async refreshToken(token: string): Promise<refreshToken> {
    const newToken = await axiosRequest.refreshToken(token);
    console.log(newToken, "Token novo");

    return newToken;
  }
}
export const auth = new Auth();
