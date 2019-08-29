import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {BackendService} from "../../../services/api/backend.service";
import {ICryptoCurrencyRes} from "unicorn-types/types/api/responses";

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  form: FormGroup;
  submitted = false;
  settings: {
    cryptoCurrencies: ICryptoCurrencyRes[],
  };
  private formChanged: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private backend: BackendService,
  ) {
  }

  onCryptoCurrenctChanged(formData) {
    console.log(formData);
  }

  ngOnInit() {
    this.settings = {
      cryptoCurrencies: []
    };
    this.form = this.fb.group({
      cryptoCurrencyInput: ["", [Validators.required]],
      category: ["", [Validators.required, Validators.minLength(2)]],
      price: ["", [Validators.required]],
      givePrice: ["", [Validators.required]],
      cryptoCurrencyOutput: ["", [Validators.required]],
      getPrice: ["", [Validators.required]],
    });
    this.formChanged = this.form.valueChanges.subscribe(console.log);
    this.backend.apiV1.get("/global-settings").then(res => {
      this.settings.cryptoCurrencies = res.data.cryptoCurrencies;
    })
  }

  ngOnDestroy() {
    this.formChanged.unsubscribe();
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
