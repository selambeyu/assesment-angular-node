import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ContactusService } from "src/app/services/contactus.service";
import { from } from "rxjs";

@Component({
  selector: "app-send-message",
  templateUrl: "./send-message.component.html",
  styleUrls: ["./send-message.component.css"]
})
export class SendMessageComponent implements OnInit {
  // constructor(private sevice: ContactusService) {}

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ContactusService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      phoneno: ["", Validators.required],
      message: ["", Validators.required]
    });
  }

  sendMessage(firstname, lastname, email, phoneno, message) {
    this.ps.postMessages(firstname, lastname, email, phoneno, message);
    this.angForm.reset();
  }

  ngOnInit() {}
  //   resetForm(form?: NgForm) {
  //     if (form != null) form.resetForm();
  //     this.sevice.formData = {
  //       firstname: "",
  //       lastname: "",
  //       email: "",
  //       message: "",
  //       phoneno: null
  //     };
  //   }
  //   onSubmit(form: NgForm) {
  //     this.sendMessage(form);
  //   }

  //   sendMessage(form: NgForm) {
  //     this.sevice.postMessage(form.value).subscribe(res => {
  //       this.resetForm(form);
  //     });
  //   }
}
