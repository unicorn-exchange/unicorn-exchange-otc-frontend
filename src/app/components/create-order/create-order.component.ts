import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";
import {ordersCreateValidationScheme} from "unicorn-types/types/validators/orders-create-validator";
import {ordersCreateFields} from "unicorn-types/types/enums/forms/orders-create";
import {genCtrl} from "../../../services/utils";

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group(Object.assign(
    genCtrl({key: ordersCreateFields.countryId, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.cryptoCurrencySellId, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.cryptoCurrencySellPrice, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.cryptoCurrencyBuyId, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.cryptoCurrencyBuyPrice, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.paymentMethodId, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.bankName, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.bankName, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.marginProfit, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.isAutoAdjustTransactionLimit, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.termsOfTrade, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.isVerifiedUsersOnly, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.isTrustedUsersOnly, scheme: ordersCreateValidationScheme}),
    genCtrl({key: ordersCreateFields.isIdentifyUsersBeforeContinueTrade, scheme: ordersCreateValidationScheme})
  ));
  formFields = ordersCreateFields;
  settings: ISettingsCommonRes;
  private formSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private commonStore: CommonStore,
  ) {
  }

  ngOnInit() {
    this.commonStore.settings$.subscribe(data => {
      this.settings = data;
    });
    this.formSubscription = this.form.valueChanges.subscribe(v => {
      console.log(v);
    });
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
