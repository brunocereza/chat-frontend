export type JwtType = {
  username: string;
  _id: string;
  iat: string;
  exp: string;
};

export type IJWT = {
  deserialize(jwt: string): Promise<JwtType>;
};
