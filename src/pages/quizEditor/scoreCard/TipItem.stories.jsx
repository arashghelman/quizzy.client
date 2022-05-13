import React from "react";
import TipItem from "./TipItem";

export default {
  title: "QuizEditor/ScoreCard/TipItem",
  component: TipItem,
};

const Template = (args) => <TipItem {...args} />;

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
