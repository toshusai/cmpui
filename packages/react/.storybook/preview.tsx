import React, { useEffect } from "react";
import { DocsContainer } from "@storybook/blocks";
import type { Decorator, Preview } from "@storybook/react";

import DocumentationTemplate from "./DocumentationTemplate.mdx";

import "@toshusai/cmpui-css/dist/index.css";
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
    options: {
      storySort: {
        order: [
          "Actions",
          "Colors",
          "Controls",
          "Float",
          "Form",
          "Layout",
          "View",
          "API",
        ],
      },
    },
    docs: {
      page: DocumentationTemplate,
      container: ({ children, context }) => {
        const theme = context.store.globals.globals.theme;
        useTheme(theme);
        return <DocsContainer context={context}>{children}</DocsContainer>;
      },
    },
  },
};

function useTheme(theme: string) {
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
}

export const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.globals.theme;
  useTheme(theme);

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
