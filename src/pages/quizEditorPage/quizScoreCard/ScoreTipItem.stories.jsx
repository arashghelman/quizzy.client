import React from "react";
import ScoreTipItem from "./ScoreTipItem";

export default {
  title: "QuizEditor/ScoreCard/Tip",
  component: ScoreTipItem,
};

const Template = (args) => <ScoreTipItem {...args} />;

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
