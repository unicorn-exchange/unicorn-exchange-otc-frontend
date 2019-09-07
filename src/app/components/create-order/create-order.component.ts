import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";
import {ordersCreateValidationScheme as scheme} from "unicorn-types/types/validators/orders-create-validator";
import {OrdersCreateFields} from "unicorn-types/types/enums/forms/orders-create";
import {generateControl} from "../../../services/utils";

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    ...[generateControl(OrdersCreateFields.countryId, scheme),
      generateControl(OrdersCreateFields.cryptoCurrencySellId, scheme),
      generateControl(OrdersCreateFields.cryptoCurrencySellPrice, scheme),
      generateControl(OrdersCreateFields.cryptoCurrencyBuyId, scheme),
      generateControl(OrdersCreateFields.cryptoCurrencyBuyPrice, scheme),
      generateControl(OrdersCreateFields.paymentMethodId, scheme),
      generateControl(OrdersCreateFields.bankName, scheme),
      generateControl(OrdersCreateFields.bankName, scheme),
      generateControl(OrdersCreateFields.marginProfit, scheme),
      generateControl(OrdersCreateFields.isAutoAdjustTransactionLimit, scheme),
      generateControl(OrdersCreateFields.termsOfTrade, scheme),
      generateControl(OrdersCreateFields.isVerifiedUsersOnly, scheme),
      generateControl(OrdersCreateFields.isTrustedUsersOnly, scheme),
      generateControl(OrdersCreateFields.isIdentifyUsersBeforeContinueTrade, scheme), ]
  });
  formFields = OrdersCreateFields;
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
