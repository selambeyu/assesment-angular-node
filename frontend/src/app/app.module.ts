import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ContactsComponent } from "./contact-us/contacts/contacts.component";
import { SendMessageComponent } from "./contact-us/send-message/send-message.component";
import { Contactus } from "./models/contactus.model";
import { from } from "rxjs";
import { FooterComponent } from "./layout/footer/footer.component";
import { HeaderComponent } from "./layout/header/header.component";
import { ContactusModule } from "./contactus/contactus.module";

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ContactsComponent,
    SendMessageComponent,
    // AboutusComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContactusModule
  ],
  providers: [Contactus],
  bootstrap: [AppComponent]
})
export class AppModule {}
