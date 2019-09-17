import {Component} from "@angular/core";
import {Subject} from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  alertType = new Subject<string>();

  constructor() {
  }

  alertClick() {
    this.alertType.next("success");
  }

}
