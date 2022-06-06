import React from "react";
import ScoreCard from "./ScoreCard";

export default {
  title: "QuizEditor/ScoreCard",
  component: ScoreCard,
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

const Template = (args) => <ScoreCard {...args} />;

export const Default = Template.bind({});
