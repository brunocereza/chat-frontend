import { login } from "@/shared/types/login";
import axios from "axios";
import { log } from "console";

const URLBASE = process.env.URLBASE;

type IParams = {
  [x: string]: string;
};

type GenericToken = {
  token_type: string;
  access_token: string;
};

class AxiosRequest {
  public async createUser(params: IParams, token: string) {
    await axios
      .post(`http://localhost:3333/v1/user/create`, params, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        return response;
      });
  }

  public async genericToken(): Promise<string> {
    const { data } = await axios.get<GenericToken>(
      "http://localhost:3333/v1/auth/getToken",
      {
        headers: {
          Secret: "some-dance-to-remember-some-dance-to-forget",
          "Content-Type": "application/json",
        },
      }
    );

    return data.access_token;
  }

  public async login(params: login): Promise<Login> {
    const { data } = await axios.post<Login>(
      "http://localhost:3333/v1/auth/login",
      params,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  }

  public async refreshToken(token: string): Promise<refreshToken> {
    const { data } = await axios.get<refreshToken>(
      "http://localhost:3333/v1/auth/refreshToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);

    return data;
  }
}

export const axiosRequest = new AxiosRequest();
