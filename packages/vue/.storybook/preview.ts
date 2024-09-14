import type { Decorator, Preview } from "@storybook/vue3";

import "@toshusai/cmpui-css/dist/index.css";
import { h } from "vue";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;

export const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.globals.theme;
  document.documentElement.dataset.theme = theme;

  return StoryFn();
};

export const decorators = [withTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "system",
    toolbar: {
      icon: "sun",
      items: [
        { value: "system", icon: "circlehollow", title: "system" },
        { value: "light", icon: "sun", title: "light" },
        { value: "dark", icon: "moon", title: "dark" },
      ],
      showName: true,
    },
  },
};
