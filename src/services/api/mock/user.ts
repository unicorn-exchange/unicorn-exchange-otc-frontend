import {defaultResponse} from "./default_response";
import {ISignInRes} from "../../../types/api/responses";

export const user: ISignInRes = {
  token: "token",
  ...defaultResponse,
};
