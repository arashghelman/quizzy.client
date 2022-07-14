import React from "react";
import QuestionEditorForm from "./QuestionEditorForm";

export default {
  title: "Pages/Quiz Editor/Forms/Question Editor Form",
  component: QuestionEditorForm,
};

const Template = (args) => <QuestionEditorForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
