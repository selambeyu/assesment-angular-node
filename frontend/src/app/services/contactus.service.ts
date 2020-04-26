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

  postMessage(formData: Contactus) {
    return this.http.post(this.rootURL + "/submit-message", formData);
  }
}
