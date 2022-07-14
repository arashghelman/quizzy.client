import React from "react";
import QuestionsContainer from "./QuestionsContainer";
import { questions } from "@/utils/fakeData";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default {
  title: "Pages/Quiz Editor/Containers/Questions Container",
  component: QuestionsContainer,
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

const Template = (args) => <QuestionsContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  questions: questions,
};
