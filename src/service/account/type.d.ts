export interface ICreateAccount {
  public create(params: createAccount, token: string): Promise<boolean>;
}
