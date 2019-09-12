import {genCtrl} from "../src/services/utils";
import {ordersCreateValidationScheme as scheme} from "unicorn-types/types/validators/orders-create-validator";
import {ordersCreateFields} from "unicorn-types/types/enums/forms/orders-create";

describe("Utils", () => {
  it("should return correct validation controls", () => {
    const key1 = ordersCreateFields.countryId;
    const key2 = ordersCreateFields.bankName;
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
});

