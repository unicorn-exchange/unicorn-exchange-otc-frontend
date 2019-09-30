import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdersStore} from "../../stores/orders-store.service";
import {ROUTES} from "../../../config";

@Component({
  selector: "app-order-component",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {

  showSideBar = false;
  offer: {};
  ROUTES = ROUTES;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersStore: OrdersStore,
  ) {
    this.offer = ordersStore.state.orders[1];
  }

  ngOnInit() {
    // this.offer = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.ordersStore.getOrder(params.get("id")))
    // );
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  checkPath() {
  }
}
