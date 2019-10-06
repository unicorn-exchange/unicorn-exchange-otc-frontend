import {IFullOrderDTO} from "unicorn-types/types/api/dtos";
import {orderCommonFields, orderReadFields} from "unicorn-types/types/enums/forms/order";
import {user} from "./user";

export const order: IFullOrderDTO = {
  [orderReadFields.country]: {
    id: 1,
    title: "Russia"
  },
  [orderReadFields.cryptoCurrencySell]: {
    id: 1,
    title: "BTC"
  },
  [orderReadFields.cryptoCurrencyBuy]: {
    id: 1,
    title: "USDT"
  },
  [orderReadFields.paymentMethod]: {
    id: 1,
    title: "Pay Pall"
  },
  [orderReadFields.owner]: user,
  [orderReadFields.currency]: {
    id: 1,
    title: "USD",
  },
  [orderCommonFields.cryptoCurrencySellPrice]: 1,
  [orderCommonFields.cryptoCurrencyBuyPrice]: 3187422,
  [orderCommonFields.bankName]: "bank",
  [orderCommonFields.marginProfit]: 1,
  [orderCommonFields.termsOfTrade]: "terms",
  [orderCommonFields.isAutoAdjustTransactionLimit]: true,
  [orderCommonFields.isVerifiedUsersOnly]: true,
  [orderCommonFields.isTrustedUsersOnly]: true,
  [orderCommonFields.isIdentifyUsersBeforeContinueTrade]: true,
};
