import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject, Subscription} from "rxjs";
import {CommonStore, IAppSettings} from "../../stores/common-store.service";
import {ordersCreateValidationScheme} from "unicorn-types/types/validators/orders-create-validator";
import {genCtrl} from "../../../services/utils";
import {OrdersStore} from "../../stores/orders-store.service";
import {TranslateService} from "@ngstack/translate";
import {orderCommonFields, orderWriteFields} from "unicorn-types/types/enums/forms/order";

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  scheme = ordersCreateValidationScheme;
  orderWriteFields = orderWriteFields;
  orderCommonFields = orderCommonFields;
  submitted = false;
  settings: IAppSettings;
  formSubscription: Subscription;
  alertType = new Subject<string>();
  form: FormGroup = this.fb.group(Object.assign(
    genCtrl({key: orderWriteFields.countryId, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.currencySell, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.currencySellPrice, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.currencyBuy, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.currencyBuyPrice, scheme: this.scheme}),
    genCtrl({key: orderWriteFields.paymentMethodId, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.bankName, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.bankName, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.marginProfit, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.isAutoAdjustTransactionLimit, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.termsOfTrade, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.isVerifiedUsersOnly, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.isTrustedUsersOnly, scheme: this.scheme}),
    genCtrl({key: orderCommonFields.isIdentifyUsersBeforeContinueTrade, scheme: this.scheme})
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
