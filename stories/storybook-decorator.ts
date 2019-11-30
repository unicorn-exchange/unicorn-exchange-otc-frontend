import {moduleMetadata} from "@storybook/angular";
import {RouterModule} from "@angular/router";
import {baseModule} from "../src/app/app.module";

export const defaultDecorator = moduleMetadata({
  imports: [
    RouterModule.forRoot([], {useHash: true}),
    ...baseModule.imports,
  ],
  declarations: [
    ...baseModule.declarations,
  ],
  providers: [
    ...baseModule.providers,
  ],
});
