import React from "react";
import Header from "./Header";
import { quiz } from "@/utils/fakeData";

export default {
  title: "QuizEditor/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: quiz,
};
