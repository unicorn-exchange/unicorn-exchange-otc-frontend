import {Component, OnInit} from "@angular/core";
import {NgbAlertConfig} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime, takeUntil} from "rxjs/operators";
import {CommonStore, IGlobalNotification} from "../../stores/common-store.service";
import {BaseComponent} from "../base-component/base.component";

const DEBOUNCE_TIME = 3000;

@Component({
  selector: "app-notification-component",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
  providers: [NgbAlertConfig]
})
export class NotificationComponent extends BaseComponent implements OnInit {
  notification: IGlobalNotification;

  constructor(
    private alertConfig: NgbAlertConfig,
    private commonStore: CommonStore,
  ) {
    super();
    alertConfig.dismissible = false;
  }

  ngOnInit() {
    this.commonStore.globalNotification$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        this.notification = params;
        this.alertConfig.type = params.type;
      });
    this.commonStore.globalNotification$
      .pipe(debounceTime(DEBOUNCE_TIME))
      .subscribe(() => {
        this.notification = null;
      });
  }
}
