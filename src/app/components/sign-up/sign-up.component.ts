import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CONFIG, ROUTES} from "../../../config";
import {Subscription} from "rxjs";
import {genCtrl} from "../../../services/utils";
import {signUpValidationScheme} from "unicorn-types/types/validators/sign-up-validator";
import {signUpFields} from "unicorn-types/types/enums/forms/sign-up";
import {Router} from "@angular/router";
import {TranslateService} from "@ngstack/translate";
import {AuthStore} from "../../stores/auth-store.service";

@Component({
  selector: "app-sign-up-component",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit, OnDestroy {
  ROUTES = ROUTES;
  CONFIG = CONFIG;
  // customErrorKeys = customErrorKeys;
  submitted = false;
  formFields = signUpFields;
  scheme = signUpValidationScheme;
  formSubscription: Subscription;
  form: FormGroup = this.fb.group(Object.assign(
    genCtrl({key: this.formFields.username, scheme: this.scheme}),
    genCtrl({key: this.formFields.email, scheme: this.scheme}),
    genCtrl({key: this.formFields.password, scheme: this.scheme}),
  ));

  constructor(
    private fb: FormBuilder,
    private authStore: AuthStore,
    private translate: TranslateService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.formSubscription = this.form.valueChanges.subscribe(() => {
      console.log(this.form.get(this.formFields.email));
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

    this.authStore
      .signUp(formData)
      .then(() => this.router.navigate([ROUTES.OPEN_MARKET]))
      .catch(err => {
        console.log(err);
      });
  }
}

