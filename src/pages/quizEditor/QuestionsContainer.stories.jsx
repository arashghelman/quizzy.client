import React from "react";
import QuestionsContainer from "./QuestionsContainer";
import * as MultipleChoiceCardStories from "./questionsContainer/MultipleChoiceCard.stories";
import * as PollCardStories from "./questionsContainer/PollCard.stories";

export default {
  title: "QuizEditor/Questions/QuestionsContainer",
  component: QuestionsContainer,
};

const Template = (args) => <QuestionsContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  questions: [
    {
      ...MultipleChoiceCardStories.Default.args.data,
    },
    { ...PollCardStories.Default.args.data },
  ],
};
