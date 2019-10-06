import {OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
import {CONFIG} from "../../../config";

export class BaseComponent implements OnDestroy {
  ngUnsubscribe = new Subject<void>();

  ngOnDestroy() {
    if (CONFIG.DEBUG_PERFORMANCE) {
      console.log("Subscriptions destroyed", this);
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
