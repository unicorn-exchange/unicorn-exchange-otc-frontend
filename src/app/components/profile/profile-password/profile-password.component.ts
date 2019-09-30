import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthStore} from "../../../stores/auth-store.service";
import {Subject} from "rxjs";

@Component({
  selector: "app-profile-password-component",
  templateUrl: "./profile-password.component.html",
  styleUrls: ["./profile-password.component.scss"]
})
export class ProfilePasswordComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  alertType = new Subject<string>();

  constructor(
    private fb: FormBuilder,
    private authStore: AuthStore,
  ) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.fb.group({
      oldPassword: ["", [Validators.required, Validators.minLength(6)]],
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(event, formData) {
    this.submitted = true;
    event.preventDefault();
    if (this.form.invalid) {
      return;
    }
    this.authStore
      .changePassword({
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword
      })
      .then(() => this.alertType.next("success"));
  }
}
