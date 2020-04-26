import { Injectable } from "@angular/core";
import { Contactus } from "../models/contactus.model";

@Injectable({
  providedIn: "root"
})
export class ContactusService {
  formData: Contactus;
  constructor() {}
}
