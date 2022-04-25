import React from "react";
import PollCard from "./PollCard";
import { question, pollOptions } from "@/utils/fakeData";

export default {
  title: "QuizEditor/Questions/PollCard",
  component: PollCard,
};

const Template = (args) => <PollCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: question.title,
    number: question.number,
    options: pollOptions,
  },
};
