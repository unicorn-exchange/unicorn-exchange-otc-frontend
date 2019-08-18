export interface IDefaultRes {
  ok: boolean;
  errors: string[] | null;
}

export interface ISignInRes extends IDefaultRes {
  token?: string;
}

export interface ISignUpRes extends ISignInRes {
}
