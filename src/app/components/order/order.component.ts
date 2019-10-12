import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdersStore} from "../../stores/orders-store.service";
import {ROUTES} from "../../../config";
import {BaseComponent} from "../base-component/base.component";
import {takeUntil} from "rxjs/operators";
import {IFullOrderDTO} from "unicorn-types/types/api/dtos";
import {CommonStore} from "../../stores/common-store.service";
import {NotificationType} from "../notification/notification.enum";
import {IAppSettings, SettingsStore} from "../../stores/settings-store.service";

@Component({
  selector: "app-order-component",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent extends BaseComponent implements OnInit {
  order: IFullOrderDTO;
  settings: IAppSettings;
  ROUTES = ROUTES;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersStore: OrdersStore,
    private commonStore: CommonStore,
    private settingsStore: SettingsStore,
  ) {
    super();
  }

  ngOnInit() {
    this.settingsStore.settings$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.settings = data;
      });
    this.route.paramMap
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        this.state.isLoading = true;
        this.ordersStore
          .getOrder(params.get("id"))
          .then(res => {
            this.order = res.payload;
          })
          .catch(() => {
            this.commonStore.showNotification({
              text: "Cant's load an order",
              type: NotificationType.error
            });
          })
          .finally(() => {
            this.state.isLoading = false;
          });
      });
  }

  confirmOrder() {
    this.ordersStore
      .confirmOrder(this.order.id)
      .then(() => {
        this.router.navigate([ROUTES.PROCESSING], {relativeTo: this.route});
      })
      .catch(() => {
        this.commonStore.showNotification({
          text: "Error while confirming order",
          type: NotificationType.error
        });
      });
  }

  declineOrder() {
    this.ordersStore
      .declineOrder(this.order.id)
      .then(() => {
        this.router.navigate([ROUTES.ORDERS]);
      })
      .catch(() => {
        this.commonStore.showNotification({
          text: "Error while declining order",
          type: NotificationType.error
        });
      });
  }
}
