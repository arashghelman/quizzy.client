import React from "react";
import QuizScoreCard from "./QuizScoreCard";

export default {
  title: "QuizEditor/ScoreCard",
  component: QuizScoreCard,
  argTypes: {
    quizState: {
      defaultValue: {
        hasName: true,
        hasGrades: true,
        hasDescription: true,
        hasQuestions: true,
        isPublic: true,
      },
      control: "object",
    },
  },
};

const Template = (args) => <QuizScoreCard {...args} />;

export const Default = Template.bind({});
