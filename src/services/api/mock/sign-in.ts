import {commonResponse} from "./common-response";
import {ISignInRes} from "unicorn-types/types/api/responses";

export const signIn: ISignInRes = {
  token: "token",
  errors: [],
  ...commonResponse,
};
