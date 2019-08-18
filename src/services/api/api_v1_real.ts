import {IAPIV1} from "../../types/api/api";
import axios, {AxiosInstance, AxiosResponse} from "axios";
import {IProfile} from "../../types/api/interfaces";
import {IChangePasswordReq, IProfileReq, ISignInReq, ISignUpReq} from "../../types/api/requests";
import {IDefaultRes, ISignInRes, ISignUpRes} from "../../types/api/responses";
import {DEBUG_NETWORK} from "../../config";
import {Headers} from "../../types/enums/enums";

export class APIV1Real implements IAPIV1 {
  private transport: AxiosInstance;

  constructor(baseURL: string, headers: {} = {}) {
    this.transport = axios.create({
      baseURL: `${baseURL}/api/v1`,
      headers,
    });
    if (!DEBUG_NETWORK) {
      return;
    }
    this.transport.interceptors.request.use(request => {
      console.log("Request", request);
      return request;
    });
    this.transport.interceptors.response.use(response => {
      console.log("Response:", response);
      return response;
    });
  }

  private static parseResponse(res: AxiosResponse) {
    return res.data;
  }

  setAuth(token?: string) {
    if (!token) {
      delete this.transport.defaults.headers[Headers.Authorization];
      return;
    }
    this.transport.defaults.headers[Headers.Authorization] = `Bearer ${token}`;
  }

  signIn(params: ISignInReq): Promise<ISignInRes> {
    return this.transport
      .post("/account/signIn", params)
      .then(APIV1Real.parseResponse)
      .then((data: ISignInRes) => {
        this.setAuth(data.token);
        return data;
      });
  }

  signUp(params: ISignUpReq): Promise<ISignUpRes> {
    return this.transport.post("/account/signUp", params).then(APIV1Real.parseResponse);
  }

  changePassword(params: IChangePasswordReq): Promise<IDefaultRes> {
    return this.transport.post("/account/changePassword", params).then(APIV1Real.parseResponse);
  }

  changeProfile(params: IProfileReq): Promise<IDefaultRes> {
    return undefined;
  }

  profile(): Promise<IProfile> {
    return undefined;
  }
}
