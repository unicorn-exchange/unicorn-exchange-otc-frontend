import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdersStore} from "../../stores/orders-store.service";
import {ROUTES} from "../../../config";
import {Subscription} from "rxjs";

@Component({
  selector: "app-order-component",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit, OnDestroy {
  showSideBar = false;
  routerSubscription: Subscription;
  offer: {};
  ROUTES = ROUTES;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersStore: OrdersStore,
  ) {
  }

  ngOnInit() {
    // this.routerSubscription = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.ordersStore.getOrder(params.get("id")))
    // );
    this.offer = this.ordersStore.state$.offers[1];
    this.routerSubscription = this.route.paramMap.subscribe(params => {
      this.ordersStore.getOrder(params.get("id"));
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  checkPath() {
  }
}
