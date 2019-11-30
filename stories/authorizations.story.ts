import {storiesOf} from "@storybook/angular";
import {SignInComponent} from "../src/app/components/sign-in/sign-in.component";
import {defaultDecorator} from "./storybook-decorator";
import {SignUpComponent} from "../src/app/components/sign-up/sign-up.component";

storiesOf("Authorizations", module)
  .addDecorator(defaultDecorator)
  .add("Sign In", () => ({
    component: SignInComponent,
    props: {}
  }))
  .add("Sign Up", () => ({
    component: SignUpComponent,
    props: {},
  }));
