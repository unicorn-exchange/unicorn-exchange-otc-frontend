import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdersStore} from "../../stores/orders-store.service";
import {ROUTES} from "../../../config";
import {BaseComponent} from "../base-component/base.component";
import {takeUntil} from "rxjs/operators";
import {IFullOrderDTO} from "unicorn-types/types/api/dtos";

@Component({
  selector: "app-order-component",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent extends BaseComponent implements OnInit {
  order: IFullOrderDTO;
  ROUTES = ROUTES;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersStore: OrdersStore,
  ) {
    super();
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        this.ordersStore
          .getOrder(params.get("id"))
          .then(res => {
            this.order = res.payload;
          })
          .catch(err => {
            console.error(err);
          });
      });
  }

  confirmOrder = () => this.ordersStore.confirmOrder(this.order.id);

  checkPath() {
  }
}
