import {Component, OnInit} from "@angular/core";
import {CONFIG, ROUTES} from "../config";
import {CommonStore} from "./stores/common-store.service";
import {BaseComponent} from "./components/base-component/base.component";
import {NotificationType} from "./components/notification/notification.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent extends BaseComponent implements OnInit {
  ROUTES = ROUTES;
  CONFIG = CONFIG;

  constructor(
    private commonStore: CommonStore,
  ) {
    super();
  }

  ngOnInit() {
  }

  alertClick() {
    this.commonStore.showNotification({
      type: NotificationType.success,
      text: "Test Notification",
    });
  }
}
