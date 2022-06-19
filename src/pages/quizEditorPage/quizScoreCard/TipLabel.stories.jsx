import React from "react";
import TipLabel from "./TipLabel";

const Template = (args) => <TipLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDone: false,
  label: "Pick a relevant name",
};

export const Done = Template.bind({});
Done.args = {
  isDone: true,
  label: Default.args.label,
};

export default {
  title: "Pages/Quiz Editor/Tags & Labels/Tip Label",
  component: TipLabel,
};
