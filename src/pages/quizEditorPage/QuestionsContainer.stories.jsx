import React from "react";
import QuestionsContainer from "./QuestionsContainer";
import * as MultipleChoiceCardStories from "./questionsContainer/QuestionCardMultipleChoice.stories";
import * as PollCardStories from "./questionsContainer/QuestionCardPoll.stories";

export default {
  title: "QuizEditor/QuestionsContainer",
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
