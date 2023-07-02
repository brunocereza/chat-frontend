import axios from "axios";
import { ICreateAccount } from "./type";
import { axiosRequest } from "@/axios/axiosConfig";
import { token } from "../token";
import { log } from "console";

const URLBASE = process.env.URLBASE;

type createAccount = {
  username: string;
  password: string;
  name: string;
};

class Account implements ICreateAccount {
  public async create(params: createAccount): Promise<boolean> {
    try {
      const apiToken = await token.generateGenericToken();

      await axiosRequest.createUser("/v1/user/create", params, apiToken);

      return true;
    } catch (error) {
      console.log(error, "error");
      throw error;
    }
  }
}
export const account = new Account();
