import {TypedAxiosInstance} from "restyped-axios";
import {APIV1Doc} from "unicorn-types/types/api/api-v1-doc";
import {Headers} from "unicorn-types/types/enums/enums";
import {Injectable} from "@angular/core";
import {APIV1} from "./api_v1";
import {CONFIG, ROUTES} from "../../config";
import {CommonStore} from "../../app/stores/common-store.service";
import {NotificationType} from "../../app/components/notification/notification.enum";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  apiV1: TypedAxiosInstance<APIV1Doc>;

  constructor(
    private commonStore: CommonStore,
  ) {
    this.apiV1 = new APIV1("http://localhost:3000/api/v1").axios;

    this.apiV1.interceptors.request.use(this.onRequest, this.onRequestError);
    this.apiV1.interceptors.response.use(this.onResponse, this.onResponseError);
  }

  private onRequest = (request) => {
    if (CONFIG.DEBUG_NETWORK) {
      console.log("Request", request);
    }
    return request;
  };

  private onRequestError = (error: any) => {
    if (CONFIG.DEBUG_NETWORK) {
      console.error("Request error", error);
    }
    return Promise.reject(error);
  };

  private onResponse = (response) => {
    if (CONFIG.DEBUG_NETWORK) {
      console.log("Response:", response);
    }
    if (!response.data.ok) {
      return Promise.reject(response);
    }
    return response;
  };

  private onResponseError = (error: any) => {
    if (CONFIG.DEBUG_NETWORK) {
      console.error("Response error:", error);
    }
    if (error.response.status === 401) {
      this.commonStore.redirectTo(ROUTES.SIGN_IN);
      this.commonStore.showNotification({
        type: NotificationType.error,
        text: "Please sign in first!",
      });
    }
    return Promise.reject(error);
  };

  setAuth(token?: string) {
    if (!token) {
      delete this.apiV1.defaults.headers[Headers.Authorization];
      return;
    }
    this.apiV1.defaults.headers[Headers.Authorization] = `Bearer ${token}`;
  }
}
