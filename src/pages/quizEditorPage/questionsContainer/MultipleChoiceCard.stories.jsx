import React from "react";
import { questions } from "@/utils/fakeData";
import { questionType } from "@/constants/questionType";
import MultipleChoiceCard from "./MultipleChoiceCard";

export default {
  title: "QuizEditor/QuestionsContainer/MultipleChoiceCard",
  component: MultipleChoiceCard,
};

const Template = (args) => <MultipleChoiceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    ...questions.find((que) => que.type === questionType.MULTIPLE_CHOICE),
  },
};
