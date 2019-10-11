import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BaseComponent} from "../../base-component/base.component";
import {OrdersStore} from "../../../stores/orders-store.service";

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
  ) {
    super();
  }

  ngOnInit() {
  }

  declineOrder = () => {
    this.activeModal.dismiss('Cross click');
    this.ordersStore.declineOrder(this.orderId);
  };
}
