import {Injectable} from "@angular/core";
import {BackendService} from "../../services/api/backend.service";
import {IOrdersCreateReq} from "unicorn-types/types/api/requests";

interface StoreState {
  orders: any[];
}

@Injectable({
  providedIn: "root"
})
export class OrdersStore {
  state: StoreState = {
    orders: [
      {
        id: 1,
        name: "Jake Trump",
        amount: 0.1,
        price: 67000,
        cryptoCurrency: "BTC",
        currency: "₽",
        type: "Sell",
        paymentMethod: "Credit Card"
      },
      {
        id: 2,
        name: "Jake Trump",
        amount: 0.02,
        price: 12000,
        cryptoCurrency: "BTC",
        currency: "₽",
        type: "Buy",
        paymentMethod: "PayPall"
      },
      {
        id: 3,
        name: "Jake Trump",
        amount: 0.025,
        price: 15000,
        cryptoCurrency: "BTC",
        currency: "₽",
        type: "Sell",
        paymentMethod: "Yandex"
      },
      {
        id: 4,
        name: "Jake Trump",
        amount: 0.2,
        price: 132000,
        cryptoCurrency: "BTC",
        currency: "₽",
        type: "Sell",
        paymentMethod: "Credit Card"
      },
    ],
  };

  constructor(private backend: BackendService) {
    // this.backend.apiV1.get("/orders").then(res => {
    //   console.log(res);
    // });
  }

  loadOrders() {
    this.backend.apiV1.get("/orders").then(res => {
      console.log(res);
    });
  }

  createOrder(params: IOrdersCreateReq) {
    return this.backend.apiV1
      .post("/create-order", params)
      .then(res => {
        return res;
      });
  }
}
