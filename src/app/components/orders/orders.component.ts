import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";
import {OrdersStore} from "../../stores/orders-store.service";
import {ROUTES} from "../../../config";
import {IPartOrderDTO} from "unicorn-types/types/api/dtos";
import {orderWriteFields} from "unicorn-types/types/enums/forms/order";
import {BaseComponent} from "../base-component/base.component";
import {takeUntil} from "rxjs/operators";


@Component({
  selector: "app-orders-component",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent extends BaseComponent implements OnInit {
  filersForm: FormGroup = this.fb.group({
    [orderWriteFields.countryId]: [null, [Validators.required]],
    [orderWriteFields.cryptoCurrencySellId]: [null, [Validators.required]],
    [orderWriteFields.cryptoCurrencyBuyId]: [null, [Validators.required]],
    [orderWriteFields.paymentMethodId]: [null, [Validators.required]],
  });
  orderFilersFields = orderWriteFields;
  settings: ISettingsCommonRes;
  orders: IPartOrderDTO[];
  count: number;
  ROUTES = ROUTES;

  constructor(
    private fb: FormBuilder,
    private commonStore: CommonStore,
    private ordersStore: OrdersStore,
  ) {
    super();
  }

  loadOrders = () => this.ordersStore.loadOrders();

  confirmOrder = orderId => this.ordersStore.confirmOrder(orderId);

  declineOrder = orderId => this.ordersStore.declineOrder(orderId);

  ngOnInit() {
    this.commonStore.settings$.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.settings = data;
      });
    this.ordersStore.state$.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.orders = data.orders;
        this.count = data.count;
      });
    this.loadOrders();
  }
}
