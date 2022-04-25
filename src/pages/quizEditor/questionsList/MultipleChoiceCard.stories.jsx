import React from "react";
import MultipleChoiceCard from "./MultipleChoiceCard";
import { question, mutlipleChoiceOptions } from "@/utils/fakeData";

export default {
  title: "QuizEditor/Questions/MultipleChoiceCard",
  component: MultipleChoiceCard,
};

const Template = (args) => <MultipleChoiceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: question.title,
    number: question.number,
    options: mutlipleChoiceOptions,
  },
};
