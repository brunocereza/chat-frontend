import jwt_decode from "jwt-decode";
import { JwtType, IJWT } from "./type";

class JWebToken implements IJWT {
  public async deserialize(jwt: string): Promise<JwtType> {
    const jwtDeserialize = jwt_decode<JwtType>(jwt);

    return jwtDeserialize;
  }
}
export const jWebToken = new JWebToken();
