import React from "react";
import { questions } from "@/utils/fakeData";
import { questionType } from "@/constants/questionType";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import QuestionCardPoll from "./QuestionCardPoll";

export default {
  title: "Pages/Quiz Editor/Cards/Question Card Poll",
  component: QuestionCardPoll,
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

const Template = (args) => <QuestionCardPoll {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: { ...questions.find((qu) => qu.type === questionType.POLL) },
};
