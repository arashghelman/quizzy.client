import React from "react";
import QuizStatus from "./QuizStatus";

export default {
  title: "QuizEditor/Header/QuizStatus",
  component: QuizStatus,
};

const Template = (args) => <QuizStatus {...args} />;

export const Public = Template.bind({});
Public.args = {
  label: "Public",
};

export const Draft = Template.bind({});
Draft.args = {
  label: "Draft",
};
