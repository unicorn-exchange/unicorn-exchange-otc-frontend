import {Component, Input, OnInit} from "@angular/core";
import {NgbAlertConfig} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: "app-alerts-component",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.scss"],
  providers: [NgbAlertConfig]
})
export class AlertsComponent implements OnInit {
  @Input() alertType = new Subject<string>();

  type: string;

  constructor(alertConfig: NgbAlertConfig) {
    alertConfig.type = this.type;
    alertConfig.dismissible = false;
  }

  ngOnInit(): void {
    this.alertType.subscribe((type) => this.type = type);
    this.alertType.pipe(
      debounceTime(3000)
    ).subscribe(() => this.type = "");
  }
}
