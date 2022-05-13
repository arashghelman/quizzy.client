import React from "react";
import ScoreCard from "./ScoreCard";

export default {
  title: "QuizEditor/ScoreCard",
  component: ScoreCard,
};

const Template = (args) => <ScoreCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  quizState: {
    hasName: true,
    hasGrades: true,
    hasDescription: true,
    hasQuestions: true,
    isPublic: true,
  },
};
