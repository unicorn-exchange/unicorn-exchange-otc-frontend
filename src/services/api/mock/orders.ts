import {IOrdersRes} from "unicorn-types/types/api/responses";
import {order} from "./order";
import {commonResponse} from "./common-response";

export const orders: IOrdersRes = {
  count: 1,
  payload: [order],
  ...commonResponse
};
