import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BaseComponent} from "../../base-component/base.component";
import {CommonStore} from "../../../stores/common-store.service";
import {NotificationType} from "../../notification/notification.enum";

@Component({
  selector: "app-deposit-modal-content",
  templateUrl: "./deposit-modal.component.html",
  styleUrls: ["./deposit-modal.component.scss"]
})
export class DepositModalComponent extends BaseComponent implements OnInit {
  @Input() name;
  address = "0xa94ab44a1c16714dad4f732410c49a112d8d3605";

  constructor(
    private activeModal: NgbActiveModal,
    private commonStore: CommonStore,
  ) {
    super();
  }

  ngOnInit() {
  }

  successCopy() {
    this.commonStore.showNotification({
      text: "Address has been copied",
      type: NotificationType.success,
    });
  }
}
