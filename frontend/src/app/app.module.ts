import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ContactsComponent } from "./contact-us/contacts/contacts.component";
import { SendMessageComponent } from "./contact-us/send-message/send-message.component";
import { Contactus } from "./models/contactus.model";
import { from } from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ContactsComponent,
    SendMessageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [Contactus],
  bootstrap: [AppComponent]
})
export class AppModule {}
