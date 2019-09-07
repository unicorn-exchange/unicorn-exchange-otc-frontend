import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ROUTES} from "src/config";

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
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
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

