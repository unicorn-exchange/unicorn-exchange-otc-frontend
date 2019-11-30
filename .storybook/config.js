import {addParameters, configure} from '@storybook/angular';
import {create} from "@storybook/theming";

addParameters({
  options: {
    theme: create({base: "dark", colorPrimary: "#FF4785", colorSecondary: "#1EA7FD"}),
    showPanel: false,
    isToolshown: false,
    clearActionLogger: true,
  }
});

function loadStories() {
  const req = require.context('../stories', true, /\.story\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
