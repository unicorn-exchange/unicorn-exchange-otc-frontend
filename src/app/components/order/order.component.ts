import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {OrdersStore} from "../../stores/orders-store.service";
import {ROUTES} from "../../../config";
import {Subscription} from "rxjs";
import {BaseComponent} from "../base-component/base.component";
import {switchMap} from "rxjs/operators";

@Component({
  selector: "app-order-component",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent extends BaseComponent implements OnInit {
  showSideBar = false;
  routerSubscription: Subscription;
  offer: {};
  ROUTES = ROUTES;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersStore: OrdersStore,
  ) {
    super();
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ordersStore.getOrder(params.get("id")))
    );
    this.routerSubscription = this.route.paramMap.subscribe(params => {
      this.ordersStore.getOrder(params.get("id"));
    });
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  checkPath() {
  }
}
