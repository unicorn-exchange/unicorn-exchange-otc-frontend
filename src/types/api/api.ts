import {IProfile} from "./interfaces";
import {IChangePasswordReq, IProfileReq, ISignInReq, ISignUpReq} from "./requests";
import {IDefaultRes, ISignInRes, ISignUpRes} from "./responses";

interface IAccountServiceAPI {
  signIn(params: ISignInReq): Promise<ISignInRes>;

  signUp(params: ISignUpReq): Promise<ISignUpRes>;

  changePassword(params: IChangePasswordReq): Promise<IDefaultRes>;
}

export interface IAPIV1 extends IAccountServiceAPI {
  profile(): Promise<IProfile>;

  changeProfile(params: IProfileReq): Promise<IDefaultRes>;
}
