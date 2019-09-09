import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {TranslateService} from "@ngstack/translate";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    private loc: Location,
    private translate: TranslateService
  ) {
  }
}
