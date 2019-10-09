import {genCtrl} from "../src/services/utils";
import {ordersCreateValidationScheme as scheme} from "unicorn-types/types/validators/orders-create-validator";
import {orderCommonFields, orderWriteFields} from "unicorn-types/types/enums/forms/order";
import {settingsCommonRes} from "../src/services/api/mock/settings-common-res";
import {ICurrencyDTO} from "unicorn-types/types/api/dtos";
import {CurrencyTypes} from "unicorn-types/types/enums/currency-types";

describe("Utils", () => {
  it("should return correct validation controls", () => {
    const key1 = orderWriteFields.countryId;
    const key2 = orderCommonFields.bankName;
    const obj = Object.assign(
      genCtrl({
        key: key1,
        scheme,
      }),
      genCtrl({
        key: key2,
        scheme,
      })
    );

    expect(Array.isArray(obj[key1])).toBeTruthy();
    expect(Array.isArray(obj[key2])).toBeTruthy();
  });

  it("should concat ", () => {
    const arr = settingsCommonRes.cryptoCurrencies
      .map(i => {
        (i as ICurrencyDTO).type = CurrencyTypes.cryptoCurrency;
        return i;
      })
      .concat(settingsCommonRes.fiats.map(i => {
        (i as ICurrencyDTO).type = CurrencyTypes.fiat;
        return i;
      }));

    expect(Array.isArray(arr)).toBeTruthy();
  });
});

