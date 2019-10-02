import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Subject} from "rxjs";

@Component({
  selector: "app-withdraw-modal-content",
  templateUrl: "./withdraw-modal.component.html",
  styleUrls: ["./withdraw-modal.component.scss"]
})
export class WithdrawModalComponent implements OnInit {
  @Input() name;
  address = "0xa94ab44a1c16714dad4f732410c49a112d8d3605";
  alertType = new Subject<string>();


  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  successCopy() {
    this.alertType.next("success");
  }
}
