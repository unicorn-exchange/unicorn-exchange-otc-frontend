import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BaseComponent} from "../../base-component/base.component";
import {OrdersStore} from "../../../stores/orders-store.service";
import {ROUTES} from "../../../../config";
import {Router} from "@angular/router";

@Component({
  selector: "app-order-decline-modal-content",
  templateUrl: "./order-decline-modal.component.html",
  styleUrls: ["./order-decline-modal.component.scss"]
})
export class OrderDeclineModalComponent extends BaseComponent implements OnInit {
  @Input() orderId;

  constructor(
    public activeModal: NgbActiveModal,
    private ordersStore: OrdersStore,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
  }

  declineOrder = () => {
    this.ordersStore.declineOrder(this.orderId);
    this.router.navigate([ROUTES.ORDERS]);
    this.activeModal.dismiss("Cross click");
  }
}
