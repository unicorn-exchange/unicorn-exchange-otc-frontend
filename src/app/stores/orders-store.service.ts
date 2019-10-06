import {Injectable} from "@angular/core";
import {BackendService} from "../../services/api/backend.service";
import {IFullOrderDTO, IPartOrderDTO} from "unicorn-types/types/api/dtos";
import {BehaviorSubject} from "rxjs";

interface IStoreState {
  orders: IPartOrderDTO[];
  count: number;
}

@Injectable({
  providedIn: "root"
})
export class OrdersStore {
  state$: BehaviorSubject<IStoreState> = new BehaviorSubject<IStoreState>({
    orders: [],
    count: 0,
  });

  constructor(private backend: BackendService) {
    // this.loadOrders();
  }

  loadOrders() {
    this.backend.apiV1
      .get("/orders")
      .then(res => {
        if (!res.data.ok) {
          return console.error(res.data.errors);
        }
        this.state$.next({
          count: res.data.count,
          orders: res.data.payload,
        });
        return res.data;
      })
      .catch(err => {
        console.error(err);
      })
  }

  createOrder(params: IFullOrderDTO) {
    return this.backend.apiV1
      .post("/create-order", params)
      .then(res => {
        return res.data;
      });
  }

  getOrder(id) {
    return this.backend.apiV1
      .get("/orders/:id")
      .then(res => {
        return res.data;
      });
  }
}
