import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommonStore} from "../../stores/common-store.service";
import {OrdersStore} from "../../stores/orders-store.service";
import {ROUTES} from "../../../config";
import {IPartOrderDTO} from "unicorn-types/types/api/dtos";
import {orderCommonFields, orderWriteFields} from "unicorn-types/types/enums/forms/order";
import {BaseComponent} from "../base-component/base.component";
import {takeUntil} from "rxjs/operators";
import {NotificationType} from "../notification/notification.enum";
import {IAppSettings, SettingsStore} from "../../stores/settings-store.service";


@Component({
  selector: "app-orders-component",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent extends BaseComponent implements OnInit {
  orderFilersFields = orderWriteFields;
  orderCommonFields = orderCommonFields;
  filersForm: FormGroup = this.fb.group({
    [orderCommonFields.currencySell]: [null, [Validators.required]],
    [orderCommonFields.currencyBuy]: [null, [Validators.required]],
    [orderWriteFields.countryId]: [null, [Validators.required]],
    [orderWriteFields.paymentMethodId]: [null, [Validators.required]],
  });
  settings: IAppSettings;
  orders: IPartOrderDTO[];
  count: number;
  ROUTES = ROUTES;

  constructor(
    private fb: FormBuilder,
    private commonStore: CommonStore,
    private settingsStore: SettingsStore,
    private ordersStore: OrdersStore,
  ) {
    super();
  }

  ngOnInit() {
    this.settingsStore.settings$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.settings = data;
      });
    this.ordersStore.state$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.orders = data.orders;
        this.count = data.count;
      });
    this.loadOrders();
  }

  loadOrders() {
    this.ordersStore
      .loadOrders()
      .catch(() => {
        this.commonStore.showNotification({
          text: "Error while loading orders",
          type: NotificationType.error
        });
      });
  }

  confirmOrder(orderId) {
    this.ordersStore
      .confirmOrder(orderId)
      .catch(() => {
        this.commonStore.showNotification({
          text: "Error while confirming order",
          type: NotificationType.error
        });
      });
  }

  declineOrder(orderId) {
    this.ordersStore
      .declineOrder(orderId)
      .catch(() => {
        this.commonStore.showNotification({
          text: "Error while declining order",
          type: NotificationType.error
        });
      });
  }

  onSubmit(event, formData) {
    event.preventDefault();

    this.ordersStore
      .loadOrders()
      .catch(() => {
        this.commonStore.showNotification({
          text: "Error while loading orders",
          type: NotificationType.error
        });
      });
  }
}
