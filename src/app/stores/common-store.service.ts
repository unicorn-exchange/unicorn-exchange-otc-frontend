import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {NotificationType} from "../components/notification/notification.enum";
import {Router} from "@angular/router";

export interface IGlobalNotification {
  text: string;
  type: NotificationType;
}

@Injectable({
  providedIn: "root"
})
export class CommonStore {
  globalNotification$ = new Subject<IGlobalNotification>();

  constructor(
    private router: Router,
  ) {
  }

  showNotification(params: IGlobalNotification) {
    this.globalNotification$.next(params);
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
