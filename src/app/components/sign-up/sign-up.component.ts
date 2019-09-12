import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ROUTES} from "../../../config";
import {Subscription} from "rxjs";
import {genCtrl} from "../../../services/utils";
import {signUpValidationScheme} from "unicorn-types/types/validators/sign-up-validator";
import {signUpFields} from "unicorn-types/types/enums/forms/sign-up";

@Component({
  selector: "app-sign-up-component",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit, OnDestroy {
  ROUTES = ROUTES;
  form: FormGroup = this.fb.group(Object.assign(
    genCtrl({key: signUpFields.email, scheme: signUpValidationScheme}),
    genCtrl({key: signUpFields.password, scheme: signUpValidationScheme})
  ));
  formFields = signUpFields;
  private formSubscription: Subscription;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formSubscription = this.form.valueChanges.subscribe(v => {
      console.log(v);
    });
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

