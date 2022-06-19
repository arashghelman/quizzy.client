import React from "react";
import QuestionIcon from "./QuestionIcon";
import { questionType } from "@/constants/questionType";

const Template = (args) => <QuestionIcon {...args} />;

export const MultipleChoice = Template.bind({});
MultipleChoice.args = {
  type: questionType.MULTIPLE_CHOICE,
};

export const Poll = Template.bind({});
Poll.args = {
  type: questionType.POLL,
};

export default {
  title: "Question Icon",
  component: QuestionIcon,
  argTypes: {
    size: { defaultValue: "base" },
  },
};
