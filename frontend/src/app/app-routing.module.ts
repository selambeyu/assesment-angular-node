import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "contactus",
    loadChildren: () =>
      import("./contact-us/contact-us.module").then(m => m.ContactUsModule)
  },
  {
    path: "aboutus",
    loadChildren: () =>
      import("./aboutus/aboutus.module").then(m => m.AboutusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
