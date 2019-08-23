import {IGlobalSettingsRes} from "unicorn-types/types/api/responses";

export class CommonStore {
  settings: IGlobalSettingsRes = {
    cryptoCurrencies: []
  };
}
