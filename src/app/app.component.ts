import {AfterViewInit, Component, OnInit} from "@angular/core";
import {CONFIG, ROUTES} from "../config";
import {CommonStore} from "./stores/common-store.service";
import {BaseComponent} from "./components/base-component/base.component";
import {AlertType} from "./components/alerts/alerts.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent extends BaseComponent implements OnInit, AfterViewInit {
  ROUTES = ROUTES;
  CONFIG = CONFIG;

  constructor(
    private commonStore: CommonStore,
  ) {
    super();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    (document.querySelector(".app-wrapper") as HTMLElement).style.minHeight = `${window.innerHeight}px`;
  }

  alertClick() {
    this.commonStore.showAlert({
      type: AlertType.success,
      text: "Test Notification",
    });
  }
}
