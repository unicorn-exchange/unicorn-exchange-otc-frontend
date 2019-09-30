import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {OrdersStore} from "../../stores/orders-store.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: "app-order-component",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {

  showSideBar = false;
  offer = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersStore: OrdersStore,
  ) {
  }

  ngOnInit() {
    this.offer = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ordersStore.getOrder(params.get("id")))
    );
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  checkPath() {
  }
}
