import React from "react";
import QuizStatusLabel from "./QuizStatusLabel";

export default {
  title: "QuizEditor/Header/QuizStatus",
  component: QuizStatusLabel,
};

const Template = (args) => <QuizStatusLabel {...args} />;

export const Public = Template.bind({});
Public.args = {
  label: "Public",
};

export const Draft = Template.bind({});
Draft.args = {
  label: "Draft",
};
