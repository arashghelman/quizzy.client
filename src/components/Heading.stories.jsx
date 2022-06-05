import React from "react";
import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    text: {
      defaultValue: "Heading",
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
