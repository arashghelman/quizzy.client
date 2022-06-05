import React from "react";
import QuizSubject from "./QuizSubject";
import { subjectIcon } from "@/constants/subjectIcon";

export default {
  title: "QuizEditor/Header/QuizSubject",
  component: QuizSubject,
  argTypes: {
    label: {
      options: Object.keys(subjectIcon),
      control: { type: "select" },
    },
  },
};

const Template = (args) => <QuizSubject {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "English",
};
