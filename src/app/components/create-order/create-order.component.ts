import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {BackendService} from "../../../services/api/backend.service";
import {IGlobalSettingsRes} from "unicorn-types/types/api/responses";

@Component({
  selector: "app-create-order-component",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.scss"],
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    cryptoCurrencyInput: ["", [Validators.required]],
    category: ["", [Validators.required, Validators.minLength(2)]],
    price: ["", [Validators.required]],
    givePrice: ["", [Validators.required]],
    cryptoCurrencyOutput: ["", [Validators.required]],
    getPrice: ["", [Validators.required]],
  });
  settings: IGlobalSettingsRes = {
    cryptoCurrencies: []
  };
  private formSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    this.formSubscription = this.form.valueChanges.subscribe(console.log);
    this.backend.apiV1.get("/global-settings").then(res => {
      this.settings.cryptoCurrencies = res.data.cryptoCurrencies;
    })
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }


  onSubmit(event, formData) {
    event.preventDefault();
    if (this.form.invalid) {
      return;
    }

    console.log(formData);
  }
}
