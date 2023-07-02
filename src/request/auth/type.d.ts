export interface ICreateAccount {
  public login(params: createAccount, token: string): Promise<boolean>;
}
