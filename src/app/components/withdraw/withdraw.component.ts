import {Component, OnDestroy, OnInit} from "@angular/core";
import {ordersCreateValidationScheme} from "unicorn-types/types/validators/orders-create-validator";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {genCtrl} from "../../../services/utils";
import {CommonStore, IAppSettings} from "../../stores/common-store.service";
import {OrdersStore} from "../../stores/orders-store.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {WithdrawModalComponent} from "./withdraw-modal/withdraw-modal.component";
import {orderCommonFields} from "unicorn-types/types/enums/forms/order";

@Component({
  selector: "app-withdraw-component",
  templateUrl: "./withdraw.component.html",
  styleUrls: ["./withdraw.component.scss"]
})
export class WithdrawComponent implements OnInit, OnDestroy {
  scheme = ordersCreateValidationScheme;
  orderCommonFields = orderCommonFields;
  submitted = false;
  settings: IAppSettings;
  formSubscription: Subscription;
  form: FormGroup = this.fb.group(Object.assign(
    genCtrl({key: orderCommonFields.currencyBuy, scheme: this.scheme}),
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

    this.modalService.open(WithdrawModalComponent, {size: "lg"});

    // this.ordersStore
    //   .createOrder(formData)
    //   .then(() => this.alertType.next("success"))
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
}
