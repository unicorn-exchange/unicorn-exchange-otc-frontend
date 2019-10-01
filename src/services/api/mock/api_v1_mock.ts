import MockAdapter from "axios-mock-adapter";
import {AxiosInstance} from "axios";
import {AUTH_SIGN_IN, AUTH_SIGN_UP, ORDERS, ORDERS_CREATE, SETTINGS_COMMON} from "unicorn-types/types/api/api-v1-doc";
import {globalSettings} from "./global-settings";
import {commonResponse} from "./common-response";

export function mockAPIV1Requests(api: AxiosInstance) {
  const transport = new MockAdapter(api);

  transport.onGet(SETTINGS_COMMON).reply(200, globalSettings);
  transport.onGet(ORDERS).reply(200, commonResponse);
  transport.onGet(ORDERS_CREATE).reply(200, commonResponse);
  transport.onPost(AUTH_SIGN_IN).reply(200, commonResponse);
  transport.onPost(AUTH_SIGN_UP).reply(200, commonResponse);
}
