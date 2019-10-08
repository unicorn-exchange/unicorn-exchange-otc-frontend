import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";
import {BackendService} from "../../services/api/backend.service";
import {ICurrencyDTO} from "unicorn-types/types/api/dtos";
import {CurrencyTypes} from "unicorn-types/types/enums/currency-types";

export interface IAppSettings extends Partial<ISettingsCommonRes> {
  currencies: ICurrencyDTO[];
}

@Injectable({
  providedIn: "root"
})
export class CommonStore {
  settings$: BehaviorSubject<IAppSettings> = new BehaviorSubject<IAppSettings>({
    currencies: [],
    countries: [],
    paymentMethods: [],
  });

  constructor(private backend: BackendService) {
    backend.apiV1.get("/settings/common").then(res => {
      const arr = res.data.cryptoCurrencies
        .map(i => {
          (i as ICurrencyDTO).type = CurrencyTypes.cryptoCurrency;
          return i;
        })
        .concat(res.data.fiats.map(i => {
          (i as ICurrencyDTO).type = CurrencyTypes.fiat;
          return i;
        })) as ICurrencyDTO[];
      this.settings$.next({
        currencies: arr,
        countries: res.data.countries,
        paymentMethods: res.data.paymentMethods
      });
    });
  }
}
