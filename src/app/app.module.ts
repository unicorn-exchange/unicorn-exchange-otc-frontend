// Dependencies
import {BrowserModule} from "@angular/platform-browser";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule, TranslateService} from "@ngstack/translate";
// Components
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ProfileInformationComponent} from "./components/profile/profile-information/profile-information.component";
import {ProfilePasswordComponent} from "./components/profile/profile-password/profile-password.component";
import {ProfileFormComponent} from "./components/profile-form/profile-form.component";
import {CardComponent} from "./components/card/card.component";
import {OpenMarketComponent} from "./components/open-market/open-market.component";
import {RatingComponent} from "./components/rating/rating.component";
import {CreateOrderComponent} from "./components/create-order/create-order.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {AlertsComponent} from "./components/alerts/alerts.component";
// Other Components
import {NgbRatingModule, NgbTooltipModule, NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {UiSwitchModule} from "ngx-toggle-switch";
import {NgSelectConfig, NgSelectModule} from "@ng-select/ng-select";

// tslint:disable-next-line:ban-types
export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use("en");
}

export const baseModule: NgModule = {
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbRatingModule,
    NgbTooltipModule,
    TranslateModule.forRoot(),
    UiSwitchModule,
    NgSelectModule,
    NgbAlertModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileInformationComponent,
    ProfilePasswordComponent,
    ProfileFormComponent,
    CardComponent,
    OpenMarketComponent,
    RatingComponent,
    CreateOrderComponent,
    OrdersComponent,
    AlertsComponent
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...baseModule.imports,
  ],
  declarations: [
    AppComponent,
    ...baseModule.declarations,
  ],
  providers: [
    ...baseModule.providers,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = "Custom not found";
  }
}
