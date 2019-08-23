import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Stores} from "../../stores/stores";

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private stores: Stores) {
  }

  moneyCurrencies: [{
    id: 1,
    title: "Rubles"
  }];

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.fb.group({
      cryptoCurrency: ["", [Validators.required]],
      category: ["", [Validators.required, Validators.minLength(2)]],
      price: ["", [Validators.required]],
      givePrice: ["", [Validators.required]],
      moneyCurrency: ["", [Validators.required]],
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
