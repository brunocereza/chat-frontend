import axios from "axios";
import { ICreateAccount } from "./type";
import { axiosRequest } from "@/axios/axiosConfig";
import { token } from "../token";

const URLBASE = process.env.URLBASE;

type createAccount = {
  username: string;
  password: string;
  name: string;
};

class Auth implements ICreateAccount {
  public async login(params: createAccount): Promise<boolean> {
    return true;

    //FAZER ENDPOINT DE LOGIN
  }
}
export const account = new Auth();
