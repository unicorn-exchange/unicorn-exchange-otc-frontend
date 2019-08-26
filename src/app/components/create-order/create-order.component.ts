import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {globalSettings} from "../../../services/api/mock/global-settings";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  // settings = globalSettings;
  settings: {
    cryptoCurrencies: any,
  };

  constructor(
    private fb: FormBuilder,
    private store: Store<any>
  ) {
  }

  onCryptoCurrenctChanged(formData) {
    console.log(formData);
  }

  ngOnInit() {
    this.settings = {cryptoCurrencies: new BehaviorSubject(globalSettings.cryptoCurrencies).asObservable()};
    this.form = this.fb.group({
      cryptoCurrencyInput: ["", [Validators.required]],
      category: ["", [Validators.required, Validators.minLength(2)]],
      price: ["", [Validators.required]],
      givePrice: ["", [Validators.required]],
      cryptoCurrencyOutput: ["", [Validators.required]],
      getPrice: ["", [Validators.required]],
    });
  }

  onClickSubmit(event, formData) {
    event.preventDefault();
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(formData);
  }
}
