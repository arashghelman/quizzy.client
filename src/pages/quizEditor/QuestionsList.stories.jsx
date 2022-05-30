import React from "react";
import QuestionsList from "./QuestionsList";
import { questions } from "@/utils/fakeData";

export default {
  title: "QuizEditor/Questions/List",
  component: QuestionsList,
};

const Template = (args) => <QuestionsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: questions,
};
