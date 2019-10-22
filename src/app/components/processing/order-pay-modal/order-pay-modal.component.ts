import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BaseComponent} from "../../base-component/base.component";
import {OrdersStore} from "../../../stores/orders-store.service";
import {CommonStore} from "../../../stores/common-store.service";
import {NotificationType} from "../../notification/notification.enum";

@Component({
  selector: "app-order-pay-modal-content",
  templateUrl: "./order-pay-modal.component.html",
  styleUrls: ["./order-pay-modal.component.scss"]
})
export class OrderPayModalComponent extends BaseComponent implements OnInit {
  @Input() orderId;

  constructor(
    private activeModal: NgbActiveModal,
    private ordersStore: OrdersStore,
    private commonStore: CommonStore,
  ) {
    super();
  }

  ngOnInit() {
  }

  confirmOrder() {
    this.activeModal.dismiss("Cross click");
    this.ordersStore
      .confirmOrder(this.orderId)
      .catch(() => {
        this.commonStore.showNotification({
          type: NotificationType.error,
          text: "Error while confirming order",
        });
      })
      .finally(() => {
        this.commonStore.showNotification({
          type: NotificationType.success,
          text: "Request has been sent",
        });
      });
  }
}
