import { axiosRequest } from "@/axios/axiosConfig";
import { auth } from "../auth";
import { ICreateAccount } from "./type";

const URLBASE = process.env.URLBASE;

type createAccount = {
  username: string;
  password: string;
  name: string;
};

class Account implements ICreateAccount {
  public async create(params: createAccount): Promise<boolean> {
    try {
      const apiToken = await auth.generateGenericToken();

      await axiosRequest.createUser(params, apiToken);

      return true;
    } catch (error) {
      console.log(error, "error");
      throw error;
    }
  }
}
export const account = new Account();
