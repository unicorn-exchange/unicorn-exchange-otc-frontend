import {IProfile} from "./interfaces";

export interface ISignInReq {
  username: string;
  password: string;
}

export interface ISignUpReq extends ISignInReq {

}

export interface IProfileReq extends IProfile {
}

export interface IForgotPasswordReq {
  email: string;
}

export interface IChangePasswordReq {
  oldPassword: string;
  newPassword: string;
}
