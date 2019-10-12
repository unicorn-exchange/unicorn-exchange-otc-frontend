import {Injectable} from "@angular/core";
import {BackendService} from "../../services/api/backend.service";
import {ISignInUserReq, ISignUpUserReq} from "unicorn-types/types/api/requests";

// TODO
interface IChangeUserPasswordReq {
  oldPassword: string;
  newPassword: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthStore {
  user = {};
  token = "";

  constructor(
    private backend: BackendService
  ) {
  }

  changePassword(params: IChangeUserPasswordReq) {
    return this.backend.apiV1
      .post("/auth/change-password", params)
      .then(res => {
        return res;
      });
  }

  signIn(params: ISignInUserReq) {
    return this.backend.apiV1
      .post("/auth/sign-in", params)
      .then(res => {
        if (!res.data.token || res.data.errors.length) {
          throw res;
        }
        this.token = res.data.token;
        return res;
      });
  }

  signUp(params: ISignUpUserReq) {
    return this.backend.apiV1
      .post("/auth/sign-up", params)
      .then(res => {
        if (!res.data.token || res.data.errors.length) {
          throw res;
        }
        this.token = res.data.token;
        return res;
      });
  }
}
