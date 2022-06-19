import React from "react";
import QuizEditorPage from "./QuizEditorPage";

const Template = (args) => <QuizEditorPage {...args} />;

export const Default = Template.bind({});

export default {
  title: "Pages/Quiz Editor",
  component: QuizEditorPage,
};
