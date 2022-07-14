import React from "react";
import { questions } from "@/utils/fakeData";
import { questionType } from "@/constants/questionType";
import QuestionCardMultipleChoice from "./QuestionCardMultipleChoice";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default {
  title: "Pages/Quiz Editor/Cards/Question Card Multiple Choice",
  component: QuestionCardMultipleChoice,
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

const Template = (args) => <QuestionCardMultipleChoice {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    ...questions.find((qu) => qu.type === questionType.MULTIPLE_CHOICE),
  },
};
