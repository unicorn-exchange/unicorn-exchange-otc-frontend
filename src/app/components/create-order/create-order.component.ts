import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";
import {ordersCreateValidationScheme as scheme} from "unicorn-types/types/validators/orders-create-validator";
import {ordersCreateFields} from "unicorn-types/types/enums/forms/orders-create";
import {generateControl} from "../../../services/utils";

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    ...[generateControl(ordersCreateFields.countryId, scheme),
      generateControl(ordersCreateFields.cryptoCurrencySellId, scheme),
      generateControl(ordersCreateFields.cryptoCurrencySellPrice, scheme),
      generateControl(ordersCreateFields.cryptoCurrencyBuyId, scheme),
      generateControl(ordersCreateFields.cryptoCurrencyBuyPrice, scheme),
      generateControl(ordersCreateFields.paymentMethodId, scheme),
      generateControl(ordersCreateFields.bankName, scheme),
      generateControl(ordersCreateFields.bankName, scheme),
      generateControl(ordersCreateFields.marginProfit, scheme),
      generateControl(ordersCreateFields.isAutoAdjustTransactionLimit, scheme),
      generateControl(ordersCreateFields.termsOfTrade, scheme),
      generateControl(ordersCreateFields.isVerifiedUsersOnly, scheme),
      generateControl(ordersCreateFields.isTrustedUsersOnly, scheme),
      generateControl(ordersCreateFields.isIdentifyUsersBeforeContinueTrade, scheme),]
  });
  formFields = ordersCreateFields;
  settings: ISettingsCommonRes;
  private formSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private commonStore: CommonStore,
  ) {
  }

  ngOnInit() {
    this.formSubscription = this.form.valueChanges.subscribe(v => {
      console.log(v);
    });
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
