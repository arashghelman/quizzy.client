import React from "react";
import NewQuestionForm from "../NewQuestionForm";

export default {
  title: "Forms/New Question Form",
  component: NewQuestionForm,
};

const Template = (args) => <NewQuestionForm {...args} />;

export const Default = Template.bind({});
