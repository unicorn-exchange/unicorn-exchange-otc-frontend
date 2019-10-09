import {OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
import {CONFIG} from "../../../config";

export interface IComponentState {
  isLoading: boolean;
}

export class BaseComponent implements OnDestroy {
  state: IComponentState;
  // TODO: Think about BehaviorSubject
  // state$: BehaviorSubject<IComponentState> = new BehaviorSubject<IComponentState>({
  //   isLoading: false,
  // });
  ngUnsubscribe = new Subject<void>();

  ngOnDestroy() {
    if (CONFIG.DEBUG_PERFORMANCE) {
      console.log("Subscriptions destroyed", this);
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
