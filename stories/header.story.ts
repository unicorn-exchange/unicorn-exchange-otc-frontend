import {storiesOf} from "@storybook/angular";
import {defaultDecorator} from "./storybook-decorator";
import {HeaderComponent} from "../src/app/header/header.component";

storiesOf("Header", module)
  .addDecorator(defaultDecorator)
  .add("Default", () => ({
    component: HeaderComponent,
    props: {},
  }));
