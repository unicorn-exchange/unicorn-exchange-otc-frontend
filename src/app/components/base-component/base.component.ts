import {OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
import {Env} from "../../../environments/env";

export interface IComponentState {
  isLoading: boolean;
}

export class BaseComponent implements OnDestroy {
  state: IComponentState = {
    isLoading: true,
  };
  // TODO: Think about BehaviorSubject
  // state$: BehaviorSubject<IComponentState> = new BehaviorSubject<IComponentState>({
  //   isLoading: false,
  // });
  ngUnsubscribe = new Subject<void>();

  ngOnDestroy() {
    if (Env.DEBUG_PERFORMANCE) {
      console.log("Subscriptions destroyed", this);
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
