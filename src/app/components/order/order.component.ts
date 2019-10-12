import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdersStore} from "../../stores/orders-store.service";
import {ROUTES} from "../../../config";
import {BaseComponent} from "../base-component/base.component";
import {takeUntil} from "rxjs/operators";
import {IFullOrderDTO} from "unicorn-types/types/api/dtos";
import {CommonStore, IAppSettings} from "../../stores/common-store.service";

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
  ) {
    super();
  }

  ngOnInit() {
    this.commonStore.settings$.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.settings = data;
      });
    this.route.paramMap.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        this.state.isLoading = true;
        this.ordersStore
          .getOrder(params.get("id"))
          .then(res => {
            this.order = res.payload;
          })
          .catch(err => {
            console.error(err);
          })
          .finally(() => {
            this.state.isLoading = false;
          });
      });
  }

  confirmOrder = () => {
    this.ordersStore.confirmOrder(this.order.id);
    this.router.navigate([ROUTES.PROCESSING], {relativeTo: this.route});
  };

  declineOrder = () => {
    this.ordersStore.declineOrder(this.order.id);
    this.router.navigate([ROUTES.ORDERS]);
  };
}
