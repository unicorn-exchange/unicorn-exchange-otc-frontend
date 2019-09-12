import {TypedAxiosInstance} from "restyped-axios";
import {APIV1Doc} from "unicorn-types/types/api/api-v1-doc";
import {Headers} from "unicorn-types/types/enums/enums";
import {Injectable} from "@angular/core";
import {APIV1} from "./api_v1";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  apiV1: TypedAxiosInstance<APIV1Doc>;

  constructor() {
    this.apiV1 = new APIV1("http://localhost:3000").axios;
  }

  setAuth(token?: string) {
    if (!token) {
      delete this.apiV1.defaults.headers[Headers.Authorization];
      return;
    }
    this.apiV1.defaults.headers[Headers.Authorization] = `Bearer ${token}`;
  }
}
