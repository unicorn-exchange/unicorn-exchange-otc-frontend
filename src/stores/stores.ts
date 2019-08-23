import {CommonStore} from "./common.store";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Stores {
  common = new CommonStore()
}
