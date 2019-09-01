import {IGlobalSettingsRes} from "unicorn-types/types/api/responses";
import {BehaviorSubject} from "rxjs";

export class CommonStore {
  settings: IGlobalSettingsRes = {
    cryptoCurrencies: []
  };
  lang$: BehaviorSubject<string> = new BehaviorSubject<string>("string");

  setLang(lang: string) {
    this.lang$.next(lang);
  }
}
