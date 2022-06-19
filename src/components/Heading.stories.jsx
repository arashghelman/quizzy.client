import React from "react";
import Heading from "./Heading";

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Heading",
};
Default.argTypes = {
  text: {
    control: "text",
  },
};

export default {
  title: "Heading",
  component: Default,
};
