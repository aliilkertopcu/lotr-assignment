import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { UserRoutingModule } from "./user-routing.module";
import { LoginService } from "./login/login.service";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { ProfileComponent } from "./profile/profile.component";
import { HttpClientModule } from "@angular/common/http";
import { CharacterModule } from "../character/character.module";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent, ProfileComponent],
  imports: [UserRoutingModule, HttpClientModule, CoreModule.forRoot(), SharedModule.forRoot(), CharacterModule],
  providers: [LoginService],
  bootstrap: []
})
export class UserModule { }
