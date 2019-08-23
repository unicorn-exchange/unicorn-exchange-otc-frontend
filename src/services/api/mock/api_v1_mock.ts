import MockAdapter from "axios-mock-adapter";
import {AxiosInstance} from "axios";
import {AUTH_SIGN_IN, AUTH_SIGN_UP, GLOBAL_SETTINGS} from "unicorn-types/types/api/api-v1-doc"
import {globalSettings} from "./global-settings";

export function mockAPIV1Requests(api: AxiosInstance) {
  const transport = new MockAdapter(api);

  transport.onGet(GLOBAL_SETTINGS).reply(200, globalSettings);
  transport.onPost(AUTH_SIGN_IN).reply(200, undefined);
  transport.onPost(AUTH_SIGN_UP).reply(200, undefined);
}
