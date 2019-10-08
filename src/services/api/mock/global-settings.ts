import {ISettingsCommonRes} from "unicorn-types/types/api/responses";

export const globalSettings: ISettingsCommonRes = {
  ok: true,
  cryptoCurrencies: [{
    id: 1,
    title: "Bitcoin"
  }, {
    id: 2,
    title: "Ethereum"
  }],
  countries: [{
    id: 1,
    title: "USA"
  }, {
    id: 2,
    title: "Russia"
  }],
  fiats: [{
    id: 1,
    title: "Rubles"
  }, {
    id: 2,
    title: "Usd"
  }],
  paymentMethods: [{
    id: 1,
    title: "PayPal"
  }, {
    id: 2,
    title: "Card"
  }],
};
