import {Injectable} from "@angular/core";
import {CommonStore} from "./common.store";
import {BackendService} from "../../services/api/backend.service";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  common: CommonStore;

  constructor(private backend: BackendService) {
    if (true && window) {
      // @ts-ignore
      window.store = this;
    }
    this.common = new CommonStore();
    backend.apiV1.get("/global-settings").then(res => {
      this.common.settings.cryptoCurrencies = res.data.cryptoCurrencies;
    });
  }
}
