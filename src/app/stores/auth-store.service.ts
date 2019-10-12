import {Injectable} from "@angular/core";
import {BackendService} from "../../services/api/backend.service";
import {ISignInUserReq, ISignUpUserReq} from "unicorn-types/types/api/requests";
import {IUserDTO} from "unicorn-types/types/api/dtos";
import {DBService} from "../../services/db/db.service";
import {KeyEnum} from "../../services/db/key.enum";


// TODO
interface IChangeUserPasswordReq {
  oldPassword: string;
  newPassword: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthStore {
  user: IUserDTO;

  constructor(
    private backend: BackendService,
    private db: DBService,
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
        this.saveAndSetToken(res.data.token);
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
        this.saveAndSetToken(res.data.token);
        return res;
      });
  }

  private saveAndSetToken(token) {
    this.db.storage.set(KeyEnum.token, token);
    this.backend.setAuth(token);
  }
}
