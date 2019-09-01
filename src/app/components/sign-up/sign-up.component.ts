import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ROUTES} from "../../../config";

@Component({
  selector: "app-sign-up-component",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  ROUTES = ROUTES;

  login: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  get f() {
    return this.login.controls;
  }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onClickSubmit(formData) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.login.invalid) {
      return;
    }

    console.log("Your Email is : " + formData.email);
    console.log("Your Password is : " + formData.password);
  }
}

