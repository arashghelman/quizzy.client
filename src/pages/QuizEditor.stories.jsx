import React from "react";
import QuizEditor from "./QuizEditor";

export default {
  title: "QuizEditor",
  component: QuizEditor,
};

const Template = (args) => <QuizEditor {...args} />;

export const Default = Template.bind({});
