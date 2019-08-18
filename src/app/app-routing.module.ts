import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileInformationComponent} from "./profile/profile-information/profile-information.component";
import {ProfilePasswordComponent} from "./profile/profile-password/profile-password.component";
import {ROUTES} from "../config";

const routes: Routes = [
  {
    path: ROUTES.SIGN_IN,
    component: SignInComponent,
    pathMatch: "full"
  },
  {
    path: ROUTES.SIGN_UP,
    component: SignUpComponent,
    pathMatch: "full"
  },
  {
    path: ROUTES.PROFILE.PROFILE,
    component: ProfileComponent,
    children: [
      {
        path: ROUTES.PROFILE.INFO,
        component: ProfileInformationComponent,
      },
      {
        path: ROUTES.PROFILE.CHANGE_PASSWORD,
        component: ProfilePasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
