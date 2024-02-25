import type { Decorator, Preview } from "@storybook/react";
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import { useEffect } from "react";
import React from "react";
import { themes } from "@storybook/theming";

import "../src/global.css";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocumentationTemplate,
      theme: themes.dark,
    },
  },
};

export const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.globals.theme;

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return <StoryFn />;
};

export const decorators = [withTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "sun",
      items: [
        { value: "light", icon: "sun", title: "light" },
        { value: "dark", icon: "moon", title: "dark" },
      ],
      showName: true,
    },
  },
};

export default preview;
