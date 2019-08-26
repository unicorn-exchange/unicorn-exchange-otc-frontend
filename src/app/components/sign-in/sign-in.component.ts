import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Joi from "joi-browser";
import {signInValidator} from "../../../services/validators/sign-in-validator";
import {ROUTES} from "src/config";

function validateEmail(control: FormControl) {
  const result = Joi.validate(control.value, signInValidator.email);
  if (result.error) {
    return result.error.details.reduce((obj, val) => {
      obj[val.type] = val.message;
      return obj;
    }, {});
  }
}

@Component({
  selector: "app-sign-in-component",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  ROUTES = ROUTES;

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ["", [validateEmail]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      recaptcha: ["", Validators.required]
    });
  }

  onClickSubmit(event, formData) {
    event.preventDefault();
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log("Your Email is : " + formData.email);
    console.log("Your Password is : " + formData.password);
  }
}

