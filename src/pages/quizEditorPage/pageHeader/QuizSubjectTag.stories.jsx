import React from "react";
import QuizSubjectTag from "./QuizSubjectTag";
import { subjectIcon } from "@/constants/subjectIcon";

const Template = (args) => <QuizSubjectTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "English",
};

export default {
  title: "Pages/Quiz Editor/Tags & Labels/Quiz Subject Tag",
  component: QuizSubjectTag,
  argTypes: {
    label: {
      options: Object.keys(subjectIcon),
      control: { type: "select" },
    },
  },
};
