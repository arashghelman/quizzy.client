import React from "react";
import QuizStatusLabel from "./QuizStatusLabel";

const Template = (args) => <QuizStatusLabel {...args} />;

export const Public = Template.bind({});
Public.args = {
  label: "Public",
};

export const Draft = Template.bind({});
Draft.args = {
  label: "Draft",
};

export default {
  title: "Pages/Quiz Editor/Tags & Labels/Quiz Status Label",
  component: QuizStatusLabel,
};
