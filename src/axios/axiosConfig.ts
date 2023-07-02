import axios from "axios";

const URLBASE = process.env.URLBASE;

type IParams = {
  [x: string]: string;
};

interface IGenericToken {
  token_type: string;
  access_token: string;
}

class AxiosRequest {
  public async createUser(url: string, params: IParams, token: string) {
    await axios
      .post(`http://localhost:3333${url}`, params, {
        headers: {
          Authorization: `Bearer ${token}`,
          Secret: "some-dance-to-remember-some-dance-to-forget",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        return response;
      });
  }

  public async httpPostGenericToken(): Promise<string> {
    const { data } = await axios.get<IGenericToken>(
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
}

export const axiosRequest = new AxiosRequest();
