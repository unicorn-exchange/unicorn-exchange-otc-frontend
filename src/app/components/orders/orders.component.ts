import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {CommonStore} from "../../stores/common-store.service";
import {OrdersStore} from "../../stores/orders-store.service";
import {ROUTES} from "../../../config";
import {IPartOrderDTO} from "unicorn-types/types/api/dtos";
import {orderReadFields} from "unicorn-types/types/enums/forms/order";
import {BaseComponent} from "../base-component/base.component";
import {takeUntil} from "rxjs/operators";


@Component({
  selector: "app-orders-component",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent extends BaseComponent implements OnInit {
  filersForm: FormGroup = this.fb.group({
    [orderReadFields.country]: [null, [Validators.required]],
    [orderReadFields.cryptoCurrencySell]: [null, [Validators.required]],
    [orderReadFields.cryptoCurrencyBuy]: [null, [Validators.required]],
    [orderReadFields.paymentMethod]: [null, [Validators.required]],
  });
  orderFilersFields = orderReadFields;
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
  }
}
