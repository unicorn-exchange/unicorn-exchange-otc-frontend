import {TypedAxiosInstance} from "restyped-axios";
import {APIV1Doc} from "unicorn-types/types/api/api-v1-doc";
import {Headers} from "unicorn-types/types/enums/enums";
import {Injectable} from "@angular/core";
import {APIV1} from "./api_v1";
import {CONFIG} from "../../config";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  apiV1: TypedAxiosInstance<APIV1Doc>;

  constructor() {
    this.apiV1 = new APIV1("http://localhost:3000/api/v1").axios;

    this.apiV1.interceptors.request.use(BackendService.onRequest, BackendService.onRequestError);
    this.apiV1.interceptors.response.use(BackendService.onResponse, BackendService.onResponseError);
  }

  private static onRequest(request) {
    if (CONFIG.DEBUG_NETWORK) {
      console.log("Request", request);
    }
    return request;
  }

  private static onRequestError(error: any) {
    return Promise.reject(error);

  }

  private static onResponse(response) {
    if (CONFIG.DEBUG_NETWORK) {
      console.log("Response:", response);
    }
    if (!response.data.ok) {
      return Promise.reject(response);
    }
    return response;
  }

  private static onResponseError(error: any) {
    return Promise.reject(error);
  }

  setAuth(token?: string) {
    if (!token) {
      delete this.apiV1.defaults.headers[Headers.Authorization];
      return;
    }
    this.apiV1.defaults.headers[Headers.Authorization] = `Bearer ${token}`;
  }
}
