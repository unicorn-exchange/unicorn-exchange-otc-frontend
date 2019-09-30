import {Schema} from "yup";
import {AbstractControl} from "@angular/forms";

export function yupValidate<T>(schema: Schema<T>) {
  return function validatorFn(control: AbstractControl) {
    try {
      schema.validateSync(control.value);
      return {};
    } catch (result) {
      if (result.errors.length) {
        return result.errors.reduce((obj, val) => {
          obj[result.type || result.message] = val;
          return obj;
        }, {});
      }
    }
  };
}

export function genCtrl({key, scheme, defaultValue = null}: {
  key: string;
  scheme: any;
  defaultValue?: any;
}) {
  return {
    [key]: [defaultValue, yupValidate(scheme[key])],
  };
}
