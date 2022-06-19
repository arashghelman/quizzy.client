import React from "react";
import QuestionEditorForm from "./QuestionEditorForm";
import Backdrop from "@/components/Backdrop";

const Template = () => <QuestionEditorForm />;

export const Default = Template.bind({});

export const WithBackdrop = Template.bind({});
WithBackdrop.decorators = [
  (Story) => (
    <Backdrop>
      <Story />
    </Backdrop>
  ),
];

export default {
  title: "Pages/Quiz Editor/Forms/Question Editor Form",
  component: QuestionEditorForm,
};
