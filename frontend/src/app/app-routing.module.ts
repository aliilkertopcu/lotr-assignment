import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "@core/guards";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./feature/user/user.module").then((module) => module.UserModule)
  },
  {
    path: "characters",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/user/user.module").then((module) => module.UserModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      relativeLinkResolution: "legacy"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
