import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";

enum formInputs {
  country = "country",
  cryptoCurrencySell = "cryptoCurrencySell",
  cryptoCurrencyBuy = "cryptoCurrencyBuy",
  paymentMethod = "paymentMethod"
}

@Component({
  selector: "app-dashboard-component",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  form: FormGroup = this.fb.group({
    [formInputs.country]: [null, [Validators.required]],
    [formInputs.cryptoCurrencySell]: [null, [Validators.required]],
    [formInputs.cryptoCurrencyBuy]: [null, [Validators.required]],
    [formInputs.paymentMethod]: [null, [Validators.required]],
  });
  formInputs = formInputs;
  settings: ISettingsCommonRes;

  constructor(
    private fb: FormBuilder,
    private commonStore: CommonStore,
  ) {
  }

  offers = [
    {
      name: "Jake Trump",
      amount: 0.1,
      price: 67000,
      cryptoCurrency: "BTC",
      currency: "₽",
      type: "Sell",
      paymentMethod: "Credit Card"
    },
    {
      name: "Jake Trump",
      amount: 0.02,
      price: 12000,
      cryptoCurrency: "BTC",
      currency: "₽",
      type: "Buy",
      paymentMethod: "PayPall"
    },
    {
      name: "Jake Trump",
      amount: 0.025,
      price: 15000,
      cryptoCurrency: "BTC",
      currency: "₽",
      type: "Sell",
      paymentMethod: "Yandex"
    },
    {
      name: "Jake Trump",
      amount: 0.2,
      price: 132000,
      cryptoCurrency: "BTC",
      currency: "₽",
      type: "Sell",
      paymentMethod: "Credit Card"
    },
  ];

  ngOnInit() {
    this.settings = this.commonStore.settings;
  }
}
