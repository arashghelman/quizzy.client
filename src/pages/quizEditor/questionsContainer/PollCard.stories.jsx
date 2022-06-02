import React from "react";
import { questions } from "@/utils/fakeData";
import { questionType } from "@/constants/questionType";
import PollCard from "./PollCard";

export default {
  title: "QuizEditor/QuestionsContainer/PollCard",
  component: PollCard,
};

const Template = (args) => <PollCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: { ...questions.find((que) => que.type === questionType.POLL) },
};
