import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-rating-component",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"]
})
export class RatingComponent implements OnInit {
  @Input() cardRate: number;
  @Input() maxRate: number;
  @Input() isReadOnly: boolean;
  @Input() color: any;

  constructor() {
  }

  ngOnInit() {
  }
}
