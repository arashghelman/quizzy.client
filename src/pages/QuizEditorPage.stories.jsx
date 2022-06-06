import React from "react";
import QuizEditorPage from "./QuizEditorPage";

export default {
  title: "QuizEditor",
  component: QuizEditorPage,
};

const Template = (args) => <QuizEditorPage {...args} />;

export const Default = Template.bind({});
