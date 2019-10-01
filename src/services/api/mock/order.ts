import {IOrderDTO} from "unicorn-types/types/api/dtos";
import {ordersCreateFields} from "unicorn-types/types/enums/forms/orders-create";

export const order: IOrderDTO = {
  [ordersCreateFields.countryId]: 1,
  [ordersCreateFields.cryptoCurrencySellId]: 1,
  [ordersCreateFields.cryptoCurrencySellPrice]: 1,
  [ordersCreateFields.cryptoCurrencyBuyId]: 1,
  [ordersCreateFields.cryptoCurrencyBuyPrice]: 1,
  [ordersCreateFields.paymentMethodId]: 1,
  [ordersCreateFields.bankName]: "bank",
  [ordersCreateFields.marginProfit]: 1,
  [ordersCreateFields.termsOfTrade]: "terms",
  [ordersCreateFields.isAutoAdjustTransactionLimit]: true,
  [ordersCreateFields.isVerifiedUsersOnly]: true,
  [ordersCreateFields.isTrustedUsersOnly]: true,
  [ordersCreateFields.isIdentifyUsersBeforeContinueTrade]: true,
};
