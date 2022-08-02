import React from "react";
import Switch from "../Switch";

export default {
  title: "Components/UI/Switch",
  component: Switch,
};

const Template = ({ ...args }) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  labels: ["Label1", "Label2"],
  name: "switch",
  isOn: false,
};
