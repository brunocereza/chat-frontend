export interface IAuth {
  public login({ password, username }: login): Promise<loginResponse>;
  public generateGenericToken(): Promise<string>;
}
