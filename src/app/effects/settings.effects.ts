import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {BackendService} from "../../services/api/backend.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private backend: BackendService,
  ) {
  }
}


@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get("/movies");
  }
}
