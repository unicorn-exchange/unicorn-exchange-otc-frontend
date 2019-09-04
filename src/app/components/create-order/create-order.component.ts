import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";

enum OrdersCreateFields {
  country = "country",
  cryptoCurrencySell = "cryptoCurrencySell",
  cryptoCurrencySellPrice = "cryptoCurrencySellPrice",
  cryptoCurrencyBuy = "cryptoCurrencyBuy",
  cryptoCurrencyBuyPrice = "cryptoCurrencyBuyPrice",
  paymentMethod = "paymentMethod",
  bankName = "bankName",
  marginProfit = "marginProfit",
  isAutoAdjustTransactionLimit = "isAutoAdjustTransactionLimit",
  termsOfTrade = "termsOfTrade",
  isVerifiedUsersOnly = "isVerifiedUsersOnly",
  isTrustedUsersOnly = "isTrustedUsersOnly",
  isIdentifyUsersBeforeContinueTrade = "isIdentifyUsersBeforeContinueTrade",
}

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    [OrdersCreateFields.country]: [null, [Validators.required]],
    [OrdersCreateFields.cryptoCurrencySell]: [null, [Validators.required]],
    [OrdersCreateFields.cryptoCurrencySellPrice]: [null, [Validators.required]],
    [OrdersCreateFields.cryptoCurrencyBuy]: [null, [Validators.required]],
    [OrdersCreateFields.cryptoCurrencyBuyPrice]: [null, [Validators.required]],
    [OrdersCreateFields.paymentMethod]: [null, [Validators.required]],
    [OrdersCreateFields.bankName]: [null, [Validators.required]],
    [OrdersCreateFields.marginProfit]: [null, [Validators.required]],
    [OrdersCreateFields.isAutoAdjustTransactionLimit]: [null, [Validators.required]],
    [OrdersCreateFields.termsOfTrade]: [null, [Validators.required]],
    [OrdersCreateFields.isVerifiedUsersOnly]: [null, [Validators.required]],
    [OrdersCreateFields.isTrustedUsersOnly]: [null, [Validators.required]],
    [OrdersCreateFields.isIdentifyUsersBeforeContinueTrade]: [null, [Validators.required]],
  });
  formInputs = OrdersCreateFields;
  settings: ISettingsCommonRes;
  private formSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private commonStore: CommonStore,
  ) {
  }

  ngOnInit() {
    this.formSubscription = this.form.valueChanges.subscribe(console.log);
    this.settings = this.commonStore.settings;
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }


  onSubmit(event, formData) {
    event.preventDefault();
    if (this.form.invalid) {
      return;
    }

    console.log(formData);
  }
}
