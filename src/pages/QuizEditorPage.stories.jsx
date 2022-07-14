import React from "react";
import QuizEditorPage from "./QuizEditorPage";

export default {
  title: "Pages/Quiz Editor",
  component: QuizEditorPage,
  layout: "fullscreen",
  decorators: [
    (Story) => (
      <div className="px-16">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <QuizEditorPage {...args} />;

export const Default = Template.bind({});
