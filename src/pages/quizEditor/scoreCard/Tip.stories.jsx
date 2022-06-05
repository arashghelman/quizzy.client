import React from "react";
import Tip from "./Tip";

export default {
  title: "QuizEditor/ScoreCard/Tip",
  component: Tip,
};

const Template = (args) => <Tip {...args} />;

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
