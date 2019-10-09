import {IOrderRes} from "unicorn-types/types/api/responses";
import {order} from "./order";

export const orderRes: IOrderRes = {
  ok: true,
  payload: order,
};
