import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BaseComponent} from "../../base-component/base.component";
import {OrdersStore} from "../../../stores/orders-store.service";

@Component({
  selector: "app-order-pay-modal-content",
  templateUrl: "./order-pay-modal.component.html",
  styleUrls: ["./order-pay-modal.component.scss"]
})
export class OrderPayModalComponent extends BaseComponent implements OnInit {
  @Input() orderId;

  constructor(
    public activeModal: NgbActiveModal,
    private ordersStore: OrdersStore,
  ) {
    super();
  }

  ngOnInit() {
  }

  confirmOrder = () => {
    this.activeModal.dismiss('Cross click');
    this.ordersStore.confirmOrder(this.orderId);
  };
}
