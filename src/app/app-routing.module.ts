import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ProfileInformationComponent} from "./components/profile/profile-information/profile-information.component";
import {ProfilePasswordComponent} from "./components/profile/profile-password/profile-password.component";
import {OpenMarketComponent} from "./components/open-market/open-market.component";
import {CreateOrderComponent} from "./components/create-order/create-order.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {ROUTES} from "../config";
import {OrderComponent} from "./components/order/order.component";

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
    path: ROUTES.CREATE_ORDER,
    component: CreateOrderComponent,
    pathMatch: "full"
  },
  {
    path: ROUTES.ORDERS,
    component: OrdersComponent,
    pathMatch: "full"
  },
  {
    path: ROUTES.ORDER,
    component: OrderComponent,
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
  constructor() {
  }
}
