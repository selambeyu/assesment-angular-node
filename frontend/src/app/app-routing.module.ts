import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "contactus",
    loadChildren: () =>
      import("./contactus/contactus.module").then(m => m.ContactusModule)
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
