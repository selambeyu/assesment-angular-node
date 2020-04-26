import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactusService } from "src/app/services/contactus.service";

@Component({
  selector: "app-send-message",
  templateUrl: "./send-message.component.html",
  styleUrls: ["./send-message.component.css"]
})
export class SendMessageComponent implements OnInit {
  constructor(private sevice: ContactusService) {}

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.sevice.formData = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      phoneno: null
    };
  }
  onSubmit(form: NgForm) {
    this.sendMessage(form);
  }

  sendMessage(form: NgForm) {
    this.sevice.postMessage(form.value).subscribe(res => {
      this.resetForm(form);
    });
  }
}
