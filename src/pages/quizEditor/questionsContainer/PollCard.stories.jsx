import React from "react";
import { questions } from "@/utils/fakeData";
import { questionType } from "@/constants/enums";
import PollCard from "./PollCard";

export default {
  title: "QuizEditor/Questions/PollCard",
  component: PollCard,
};

const Template = (args) => <PollCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: { ...questions.find((que) => que.type === questionType.POLL) },
};
