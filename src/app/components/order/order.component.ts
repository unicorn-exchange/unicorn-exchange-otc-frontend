import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-order-component",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {

  showSideBar = false;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  checkPath() {
  }
}
