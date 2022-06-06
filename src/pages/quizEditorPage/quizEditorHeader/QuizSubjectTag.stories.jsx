import React from "react";
import QuizSubjectTag from "./QuizSubjectTag";
import { subjectIcon } from "@/constants/subjectIcon";

export default {
  title: "QuizEditor/Header/QuizSubject",
  component: QuizSubjectTag,
  argTypes: {
    label: {
      options: Object.keys(subjectIcon),
      control: { type: "select" },
    },
  },
};

const Template = (args) => <QuizSubjectTag {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "English",
};
