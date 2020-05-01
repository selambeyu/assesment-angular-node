import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus/aboutus.component";

const routes: Routes = [
  {
    path: "contactus",
    loadChildren: () =>
      import("./contactus/contactus.module").then(m => m.ContactusModule)
    // import("./contact-us/contact-us.module").then(m => m.ContactUsModule)
    // import("./contact-us/contact-us.module").then(m => m.ContactUsModule)
  },
  {
    path: "aboutus",
    loadChildren: () =>
      import("./aboutus/aboutus.module").then(m => m.AboutusModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./contactus/contactus.module").then(m => m.ContactusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
