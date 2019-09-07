import {Schema} from "yup";
import {AbstractControl} from "@angular/forms";

export function yupValidate<T>(schema: Schema<T>) {
  return function urlValidator(control: AbstractControl) {
    try {
      schema.validateSync(control.value);
      return {};
    } catch (result) {
      if (result.errors.length) {
        return result.errors.reduce((obj, val) => {
          obj[result.name] = val;
          return obj;
        }, {});
      }
    }
  };
}

export function generateControl(key, scheme, defaultValue = null) {
  return {
    [key]: [defaultValue, yupValidate(scheme[key])],
  }
}
