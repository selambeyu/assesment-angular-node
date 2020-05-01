import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ContactusService } from "src/app/services/contactus.service";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"]
})
export class ContactusComponent implements OnInit {
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
}
