import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";
import {OrdersStore} from "../../stores/orders-store.service";

enum orderFilersFields {
  country = "country",
  cryptoCurrencySell = "cryptoCurrencySell",
  cryptoCurrencyBuy = "cryptoCurrencyBuy",
  paymentMethod = "paymentMethod"
}

@Component({
  selector: "app-orders-component",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  filersForm: FormGroup = this.fb.group({
    [orderFilersFields.country]: [null, [Validators.required]],
    [orderFilersFields.cryptoCurrencySell]: [null, [Validators.required]],
    [orderFilersFields.cryptoCurrencyBuy]: [null, [Validators.required]],
    [orderFilersFields.paymentMethod]: [null, [Validators.required]],
  });
  orderFilersFields = orderFilersFields;
  settings: ISettingsCommonRes;
  offers: any[];

  constructor(
    private fb: FormBuilder,
    private commonStore: CommonStore,
    private ordersStore: OrdersStore,
  ) {
    this.offers = ordersStore.state.orders;
  }

  loadOrders = () => this.ordersStore.loadOrders();

  ngOnInit() {
    this.commonStore.settings$.subscribe(data => {
      this.settings = data;
    });
  }
}
