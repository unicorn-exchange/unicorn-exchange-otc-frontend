import {Component, OnDestroy, OnInit} from "@angular/core";
import {ordersCreateValidationScheme} from "unicorn-types/types/validators/orders-create-validator";
import {ordersCreateFields} from "unicorn-types/types/enums/forms/orders-create";
import {ISettingsCommonRes} from "unicorn-types/types/api/responses";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {genCtrl} from "../../../services/utils";
import {CommonStore} from "../../stores/common-store.service";
import {OrdersStore} from "../../stores/orders-store.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DepositModalComponent} from "./deposit-modal/deposit-modal.component";

@Component({
  selector: "app-deposit-component",
  templateUrl: "./deposit.component.html",
  styleUrls: ["./deposit.component.scss"]
})
export class DepositComponent implements OnInit, OnDestroy {
  scheme = ordersCreateValidationScheme;
  formFields = ordersCreateFields;
  submitted = false;
  settings: ISettingsCommonRes;
  formSubscription: Subscription;
  form: FormGroup = this.fb.group(Object.assign(
    genCtrl({key: this.formFields.cryptoCurrencyBuyId, scheme: this.scheme}),
  ));
  deposits = [
    {
      id: 1,
      amount: 1,
      cryptoCurrency: "BTC",
      netAmount: 1234,
      address: "38ZLH3BapsAPgc2HW1EBf194vnpdeCTJix",
      status: "Success",
      timeCreate: "1 Oct, 9:40"
    }
  ];

  constructor(
    private fb: FormBuilder,
    private commonStore: CommonStore,
    private ordersStore: OrdersStore,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    this.commonStore.settings$.subscribe(data => {
      this.settings = data;
    });
    this.formSubscription = this.form.valueChanges.subscribe(v => {
      console.log(v);
    });
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

  onSubmit(event, formData) {
    this.submitted = true;
    event.preventDefault();
    if (this.form.invalid) {
      return;
    }

    const modalRef = this.modalService.open(DepositModalComponent, {size: "lg"});
    modalRef.componentInstance.name = "World";

    // this.ordersStore
    //   .createOrder(formData)
    //   .then(() => this.alertType.next("success"))
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
}
