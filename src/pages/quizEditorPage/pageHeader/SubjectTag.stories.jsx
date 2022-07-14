import React from "react";
import SubjectTag from "./SubjectTag";
import { subjectIcon } from "@/constants/subjectIcon";

export default {
  title: "Pages/Quiz Editor/Tags & Labels/Subject Tag",
  component: SubjectTag,
  argTypes: {
    label: {
      options: Object.keys(subjectIcon),
      control: { type: "select" },
    },
  },
};

const Template = (args) => <SubjectTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "English",
};
