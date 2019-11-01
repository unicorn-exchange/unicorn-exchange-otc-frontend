import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {AlertType} from "../components/alerts/alerts.enum";
import {Router} from "@angular/router";

export interface IGlobalAlert {
  text: string;
  type: AlertType;
}

@Injectable({
  providedIn: "root"
})
export class CommonStore {
  globalAlert$ = new Subject<IGlobalAlert>();

  constructor(
    private router: Router,
  ) {
  }

  showAlert(params: IGlobalAlert) {
    this.globalAlert$.next(params);
  }

  showCommonError(err?: string) {
    this.showAlert({
      type: AlertType.error,
      text: err || "Error occurred",
    });
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
