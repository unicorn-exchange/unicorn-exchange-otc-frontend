import axios, {TypedAxiosInstance} from "restyped-axios";
import {CONFIG} from "../../config";
import {APIV1Doc} from "unicorn-types/types/api/api-v1-doc";
import {mockAPIV1Requests} from "./mock/api_v1_mock";
import {AxiosInstance} from "axios";
import axiosCancel from "axios-cancel";

axiosCancel(axios);

export class APIV1 {
  axios: TypedAxiosInstance<APIV1Doc>;

  constructor(baseURL: string, headers: {} = {}) {
    this.axios = axios.create<APIV1Doc>({
      baseURL: `${baseURL}/api/v1`,
      headers,
    });
    if (CONFIG.FAKE_NETWORK) {
      mockAPIV1Requests(this.axios as AxiosInstance);
    }
    if (!CONFIG.DEBUG_NETWORK) {
      return;
    }
    this.axios.interceptors.request.use(request => {
      console.log("Request", request);
      return request;
    });
    this.axios.interceptors.response.use(response => {
      console.log("Response:", response);
      return response;
    });
  }
}
