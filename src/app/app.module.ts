// Dependencies
import {BrowserModule} from "@angular/platform-browser";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule, TranslateService} from "@ngstack/translate";
import {NgbAlertModule, NgbModalModule, NgbRatingModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {UiSwitchModule} from "ngx-toggle-switch";
import {NgSelectConfig, NgSelectModule} from "@ng-select/ng-select";
import {ClipboardModule} from "ngx-clipboard";
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
import {NotificationComponent} from "./components/notification/notification.component";
import {OrderComponent} from "./components/order/order.component";
import {DepositComponent} from "./components/deposit/deposit.component";
import {WithdrawComponent} from "./components/withdraw/withdraw.component";
import {DepositModalComponent} from "./components/deposit/deposit-modal/deposit-modal.component";
import {WithdrawModalComponent} from "./components/withdraw/withdraw-modal/withdraw-modal.component";
import {OrderProcessingComponent} from "./components/processing/order-processing.component";
import {OrderDeclineModalComponent} from "./components/processing/order-decline-modal/order-decline-modal.component";
import {OrderPayModalComponent} from "./components/processing/order-pay-modal/order-pay-modal.component";
import {FooterComponent} from "./components/footer/footer.component";

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
    NgbAlertModule,
    NgbModalModule,
    ClipboardModule
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
    NotificationComponent,
    OrderComponent,
    DepositComponent,
    WithdrawComponent,
    DepositModalComponent,
    WithdrawModalComponent,
    OrderProcessingComponent,
    OrderDeclineModalComponent,
    OrderPayModalComponent,
    FooterComponent
  ],
  entryComponents: [
    DepositModalComponent,
    WithdrawModalComponent,
    OrderDeclineModalComponent,
    OrderPayModalComponent
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
    NotificationComponent,
  ],
  providers: [
    ...baseModule.providers,
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ...baseModule.entryComponents
  ]
})
export class AppModule {
  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = "Custom not found";
  }
}
