import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactUsRoutingModule } from "./contact-us-routing.module";
import { ContactUsComponent } from "./contact-us.component";
import { SendMessageComponent } from "./send-message/send-message.component";
import { ContactusComponent } from "../contactus/contactus/contactus.component";

@NgModule({
  declarations: [ContactUsComponent, SendMessageComponent, ContactusComponent],
  imports: [CommonModule, ContactUsRoutingModule]
})
export class ContactUsModule {}
