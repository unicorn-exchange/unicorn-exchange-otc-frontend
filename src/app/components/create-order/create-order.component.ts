import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {BackendService} from "../../../services/api/backend.service";
import {IGlobalSettingsRes} from "unicorn-types/types/api/responses";
import {StoreService} from "../../stores/store.service";

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
  settings: IGlobalSettingsRes;
  private formSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: StoreService,
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    this.formSubscription = this.form.valueChanges.subscribe(console.log);
    this.settings = this.store.common.settings;
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
