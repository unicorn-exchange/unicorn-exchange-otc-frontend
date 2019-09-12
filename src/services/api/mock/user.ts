import {commonResponse} from "./common-response";
import {ISignInRes} from "unicorn-types/types/api/responses";

export const user: ISignInRes = {
  token: "token",
  errors: [],
  ...commonResponse,
};
