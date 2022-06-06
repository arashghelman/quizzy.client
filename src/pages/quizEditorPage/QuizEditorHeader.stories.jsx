import React from "react";
import QuizEditorHeader from "./QuizEditorHeader";
import { quiz } from "@/utils/fakeData";

export default {
  title: "QuizEditor/Header",
  component: QuizEditorHeader,
};

const Template = (args) => <QuizEditorHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: quiz,
};
