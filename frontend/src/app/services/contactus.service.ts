import { Injectable } from "@angular/core";
import { Contactus } from "../models/contactus.model";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactusService {
  formData: Contactus;
  readonly rootURL = "http://localhost:8000/api";

  constructor(private http: HttpClient) {}

  postMessage(firstname, lastname, email, phoneno, message) {
    const obj = {
      firstname,
      lastname,
      email,
      phoneno,
      message
    };
    console.log(obj);
    this.http
      .post(this.rootURL + "/submit-message", obj)
      .subscribe(res => console.log("message sent successfully"));
  }
}
