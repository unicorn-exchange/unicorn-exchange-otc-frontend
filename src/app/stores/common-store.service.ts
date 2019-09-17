import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";
import {BackendService} from "../../services/api/backend.service";

@Injectable({
  providedIn: "root"
})
export class CommonStore {
  settings$: BehaviorSubject<ISettingsCommonRes> = new BehaviorSubject<ISettingsCommonRes>({
    cryptoCurrencies: [],
    countries: [],
    paymentMethods: [],
    ok: true,
  });

  constructor(private backend: BackendService) {
    backend.apiV1.get("/settings/common").then(res => {
      this.settings$.next(res.data);
    });
  }
}
