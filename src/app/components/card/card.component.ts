import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-card-component",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() cardName: string;
  @Input() price: number;
  @Input() changedPrice: number;
  @Input() isDarkCard: boolean;
  @Input() isLightCard: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
