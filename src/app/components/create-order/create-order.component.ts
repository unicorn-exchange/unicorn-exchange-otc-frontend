import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {IGlobalSettingsRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";

enum formInputs {
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
    [formInputs.country]: [null, [Validators.required]],
    [formInputs.cryptoCurrencySell]: [null, [Validators.required]],
    [formInputs.cryptoCurrencySellPrice]: [null, [Validators.required]],
    [formInputs.cryptoCurrencyBuy]: [null, [Validators.required]],
    [formInputs.cryptoCurrencyBuyPrice]: [null, [Validators.required]],
    [formInputs.paymentMethod]: [null, [Validators.required]],
    [formInputs.bankName]: [null, [Validators.required]],
    [formInputs.marginProfit]: [null, [Validators.required]],
    [formInputs.isAutoAdjustTransactionLimit]: [null, [Validators.required]],
    [formInputs.termsOfTrade]: [null, [Validators.required]],
    [formInputs.isVerifiedUsersOnly]: [null, [Validators.required]],
    [formInputs.isTrustedUsersOnly]: [null, [Validators.required]],
    [formInputs.isIdentifyUsersBeforeContinueTrade]: [null, [Validators.required]],
  });
  formInputs = formInputs;
  settings: IGlobalSettingsRes;
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
