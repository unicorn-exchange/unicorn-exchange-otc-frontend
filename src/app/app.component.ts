import {Component} from "@angular/core";
import {Subject} from "rxjs";
import {CONFIG, ROUTES} from "../config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  ROUTES = ROUTES;
  CONFIG = CONFIG;
  alertType = new Subject<string>();

  constructor() {
  }

  alertClick() {
    this.alertType.next("success");
  }
}
