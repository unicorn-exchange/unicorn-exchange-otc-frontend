import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-profile-password-component",
  templateUrl: "./profile-password.component.html",
  styleUrls: ["./profile-password.component.scss"]
})
export class ProfilePasswordComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
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

  onClickSubmit(event) {
    event.preventDefault();
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  }
}
