import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileInformationComponent} from "./profile/profile-information/profile-information.component";
import {ProfilePasswordComponent} from "./profile/profile-password/profile-password.component";
import {OpenMarketComponent} from "./open-market/open-market.component";
import {CreateOrderComponent} from "./create-order/create-order.component";
import {ROUTES} from "../config";
import {Stores} from "../stores/stores";
import {BackendService} from "../services/api/backend.service";

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
    path: ROUTES.OPEN_MARKET,
    component: OpenMarketComponent,
    pathMatch: "full"
  },
  {
    path: ROUTES.CREATE_DEAL,
    component: CreateOrderComponent,
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
  constructor(private backend: BackendService, private stores: Stores) {
    this.backend.apiV1
      .get("/global-settings")
      .then(res => {
        stores.common.settings = res.data;
      })
  }
}
