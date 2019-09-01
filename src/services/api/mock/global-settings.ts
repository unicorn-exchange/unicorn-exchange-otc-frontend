import {IGlobalSettingsRes} from "unicorn-types/types/api/responses";

export const globalSettings: IGlobalSettingsRes = {
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
  paymentMethods: [{
    id: 1,
    title: "PayPal"
  }, {
    id: 2,
    title: "Card"
  }],
};
