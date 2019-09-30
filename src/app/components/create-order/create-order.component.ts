import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject, Subscription} from "rxjs";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";
import {ordersCreateValidationScheme} from "unicorn-types/types/validators/orders-create-validator";
import {ordersCreateFields} from "unicorn-types/types/enums/forms/orders-create";
import {genCtrl} from "../../../services/utils";
import {OrdersStore} from "../../stores/orders-store.service";
import {TranslateService} from "@ngstack/translate";

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  scheme = ordersCreateValidationScheme;
  formFields = ordersCreateFields;
  submitted = false;
  settings: ISettingsCommonRes;
  formSubscription: Subscription;
  alertType = new Subject<string>();
  form: FormGroup = this.fb.group(Object.assign(
    genCtrl({key: this.formFields.countryId, scheme: this.scheme}),
    genCtrl({key: this.formFields.cryptoCurrencySellId, scheme: this.scheme}),
    genCtrl({key: this.formFields.cryptoCurrencySellPrice, scheme: this.scheme}),
    genCtrl({key: this.formFields.cryptoCurrencyBuyId, scheme: this.scheme}),
    genCtrl({key: this.formFields.cryptoCurrencyBuyPrice, scheme: this.scheme}),
    genCtrl({key: this.formFields.paymentMethodId, scheme: this.scheme}),
    genCtrl({key: this.formFields.bankName, scheme: this.scheme}),
    genCtrl({key: this.formFields.bankName, scheme: this.scheme}),
    genCtrl({key: this.formFields.marginProfit, scheme: this.scheme}),
    genCtrl({key: this.formFields.isAutoAdjustTransactionLimit, scheme: this.scheme}),
    genCtrl({key: this.formFields.termsOfTrade, scheme: this.scheme}),
    genCtrl({key: this.formFields.isVerifiedUsersOnly, scheme: this.scheme}),
    genCtrl({key: this.formFields.isTrustedUsersOnly, scheme: this.scheme}),
    genCtrl({key: this.formFields.isIdentifyUsersBeforeContinueTrade, scheme: this.scheme})
  ));

  constructor(
    private fb: FormBuilder,
    private commonStore: CommonStore,
    private ordersStore: OrdersStore,
    private translate: TranslateService,
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
    this.submitted = true;
    event.preventDefault();
    if (this.form.invalid) {
      return;
    }

    this.ordersStore
      .createOrder(formData)
      .then(() => this.alertType.next("success"))
      .catch(err => {
        console.log(err);
      });
  }
}
