import React from "react";
import { questions } from "@/utils/fakeData";
import { questionType } from "@/constants/questionType";
import QuestionCardPoll from "./QuestionCardPoll";

export default {
  title: "QuizEditor/QuestionsContainer/PollCard",
  component: QuestionCardPoll,
};

const Template = (args) => <QuestionCardPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: { ...questions.find((que) => que.type === questionType.POLL) },
};
