import React from "react";
import QuestionIcon from "./QuestionIcon";
import { questionType } from "@/constants/questionType";

export default {
  title: "Components/QuestionIcon",
  component: QuestionIcon,
  argTypes: {
    type: {
      options: Object.values(questionType),
      control: { type: "select" },
      defaultValue: questionType.MULTIPLE_CHOICE,
    },
    size: { defaultValue: "base" },
  },
};

const Template = (args) => <QuestionIcon {...args} />;

export const MultipleChoice = Template.bind({});
MultipleChoice.args = {
  type: questionType.MULTIPLE_CHOICE,
};

export const Poll = Template.bind({});
Poll.args = {
  type: questionType.POLL,
};
