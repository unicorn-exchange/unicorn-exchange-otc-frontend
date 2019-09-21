import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  showSideBar = false;
  constructor() {
  }

  ngOnInit() {
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
}
