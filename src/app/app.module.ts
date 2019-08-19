// Dependencies
import {BrowserModule} from "@angular/platform-browser";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule, TranslateService} from "@ngstack/translate";
// Components
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {HeaderComponent} from "./header/header.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileInformationComponent} from "./profile/profile-information/profile-information.component";
import {ProfilePasswordComponent} from "./profile/profile-password/profile-password.component";
import {ProfileFormComponent} from "./profile-form/profile-form.component";
import {CardComponent} from "./card/card.component";
import {OpenMarketComponent} from "./open-market/open-market.component";
import {RatingComponent} from "./rating/rating.component";
// Other Components
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {UiSwitchModule} from "ngx-toggle-switch";
import {NgxCaptchaModule} from "ngx-captcha";

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
    TranslateModule.forRoot(),
    UiSwitchModule,
    NgxCaptchaModule
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
    RatingComponent
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
}
