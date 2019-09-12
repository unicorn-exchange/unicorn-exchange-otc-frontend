import {Injectable} from "@angular/core";
import {BackendService} from "../../services/api/backend.service";
import {ISignInUserReq, ISignUpUserReq} from "unicorn-types/types/api/requests";

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

  signIn(params: ISignInUserReq) {
    return this.backend.apiV1
      .post("/auth/sign-in", params)
      .then(res => {
        if (!res.data.token || res.data.errors.length) {
          throw res.data.errors;
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
          throw res.data.errors;
        }
        this.token = res.data.token;
        return res;
      });
  }
}
