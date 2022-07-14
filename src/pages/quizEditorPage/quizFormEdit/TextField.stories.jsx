import React from "react";
import TextField from "./TextField";

const Template = (args) => <TextField {...args} />;

export const Text = Template.bind({});
Text.args = { label: "Label", type: "text" };

export const TextArea = Template.bind({});
TextArea.args = { ...Text.args, type: "textarea" };

export default {
  title: "Pages/Quiz Editor/Form Controls/Text Field",
  component: TextField,
  argTypes: {
    type: {
      options: ["text", "textarea"],
      control: { type: "radio" },
    },
  },
};
