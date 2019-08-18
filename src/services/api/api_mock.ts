import {IAPIV1} from "../../types/api/api";
import {IProfile} from "../../types/api/interfaces";
import {user} from "./mock/user";
import {profile} from "./mock/profile";
import {defaultResponse} from "./mock/default_response";
import {IChangePasswordReq, ISignUpReq} from "../../types/api/requests";
import {IDefaultRes, ISignInRes, ISignUpRes} from "../../types/api/responses";

export class APIMock implements IAPIV1 {
  async signIn(params: ISignUpReq): Promise<ISignInRes> {
    return user;
  }

  async changePassword(params: IChangePasswordReq): Promise<IDefaultRes> {
    return defaultResponse;
  }

  async profile(): Promise<IProfile> {
    return profile;
  }

  async changeProfile(params: IProfile): Promise<IDefaultRes> {
    return defaultResponse;
  }

  async signUp(params: ISignUpReq): Promise<ISignUpRes> {
    return undefined;
  }
}
