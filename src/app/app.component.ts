import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {TranslateService} from "@ngstack/translate";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "demo-app";

  constructor(loc: Location, private translate: TranslateService) {
    loc.onUrlChange((url) => console.log("url change", url));
    console.log(translate);
  }
}
