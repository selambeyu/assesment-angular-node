import { Component, OnInit } from "@angular/core";
import { ContactusService } from "../services/contactus.service";
// import { Contactus } from "../models/contactus.model";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  constructor(private sevice: ContactusService) {}

  ngOnInit() {}
}
