import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";
import {BackendService} from "../../services/api/backend.service";

@Injectable({
  providedIn: "root"
})
export class CommonStore {
  settings: ISettingsCommonRes = {
    cryptoCurrencies: [],
    countries: [],
    paymentMethods: [],
    ok: true,
  };
  lang$: BehaviorSubject<string> = new BehaviorSubject<string>("string");

  constructor(private backend: BackendService) {
    backend.apiV1.get("/settings/common").then(res => {
      this.settings = res.data;
    });
  }

  setLang(lang: string) {
    this.lang$.next(lang);
  }
}
