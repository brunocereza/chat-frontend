import { axiosRequest } from "../axios/axiosConfig";

const URLBASE = process.env.URLBASE;

type createAccount = {
  username: string;
  password: string;
  name: string;
};

class Token {
  public async get(): Promise<string> {
    return "";
  }

  public async generateGenericToken(): Promise<string> {
    const token = await axiosRequest.httpPostGenericToken();
    return token;
  }
}
export const token = new Token();
