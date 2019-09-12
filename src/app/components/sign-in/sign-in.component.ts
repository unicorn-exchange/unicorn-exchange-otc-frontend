import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ROUTES} from "src/config";
import {genCtrl} from "../../../services/utils";
import {signInValidationScheme} from "unicorn-types/types/validators/sign-in-validator";
import {signInFields} from "unicorn-types/types/enums/forms/sign-in";
import {Subscription} from "rxjs";

@Component({
  selector: "app-sign-in-component",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit, OnDestroy {
  ROUTES = ROUTES;
  form: FormGroup = this.fb.group(Object.assign(
    genCtrl({key: signInFields.email, scheme: signInValidationScheme}),
    genCtrl({key: signInFields.password, scheme: signInValidationScheme})
  ));
  formFields = signInFields;
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

