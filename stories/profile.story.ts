import {storiesOf} from '@storybook/angular';
import {defaultDecorator} from './storybook-decorator';
import {ProfileComponent} from '../src/app/profile/profile.component';
import {ROUTES} from '../src/config';

storiesOf("Profile", module)
  .addDecorator(defaultDecorator)
  .add("Information", () => ({
    component: ProfileComponent,
    props: {
      showRoute: ROUTES.PROFILE.INFO
    },
  }))
  .add("Change Password", () => ({
    component: ProfileComponent,
    props: {
      showRoute: ROUTES.PROFILE.CHANGE_PASSWORD
    },
  }));
