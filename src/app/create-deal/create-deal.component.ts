import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-create-deal-component",
  templateUrl: "./create-deal.component.html",
  styleUrls: ["./create-deal.component.scss", "../card/card.component.scss"]
})
export class CreateDealComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.fb.group({
      category: ["", [Validators.required, Validators.minLength(2)]],
      price: ["", [Validators.required]],
      country: ["", Validators.required]
    });
  }

  onClickSubmit(event, formData) {
    event.preventDefault();
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    // console.log("Your Email is : " + formData.email);
    // console.log("Your Password is : " + formData.password);
  }
}
