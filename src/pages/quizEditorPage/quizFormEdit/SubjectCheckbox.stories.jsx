import React from "react";
import SubjectCheckbox from "./SubjectCheckbox";

export default {
  title: "Pages/Quiz Editor/Form Controls/Subject Checkbox",
  component: SubjectCheckbox,
};

const Template = (args) => <SubjectCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};
