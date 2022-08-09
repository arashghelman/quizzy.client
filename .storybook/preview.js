import "tailwindcss/tailwind.css";
import "./preview.css";
import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story) => (
  <MemoryRouter initialEntries={["/"]}>
    <Story />
  </MemoryRouter>
));
