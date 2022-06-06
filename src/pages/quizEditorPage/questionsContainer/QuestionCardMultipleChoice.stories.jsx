import React from "react";
import { questions } from "@/utils/fakeData";
import { questionType } from "@/constants/questionType";
import QuestionCardMultipleChoice from "./QuestionCardMultipleChoice";

export default {
  title: "QuizEditor/QuestionsContainer/MultipleChoiceCard",
  component: QuestionCardMultipleChoice,
};

const Template = (args) => <QuestionCardMultipleChoice {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    ...questions.find((que) => que.type === questionType.MULTIPLE_CHOICE),
  },
};
