import {storiesOf} from "@storybook/angular";
import {defaultDecorator} from "./storybook-decorator";
import {CreateOrderComponent} from "../src/app/components/create-order/create-order.component";

storiesOf("Create order", module)
  .addDecorator(defaultDecorator)
  .add("Default", () => ({
    component: CreateOrderComponent,
    props: {},
  }));
