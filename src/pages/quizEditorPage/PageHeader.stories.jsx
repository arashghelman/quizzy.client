import React from "react";
import PageHeader from "./PageHeader";
import { quiz } from "@/utils/fakeData";

export default {
  title: "Pages/Quiz Editor/Containers/Page Header",
  component: PageHeader,
};

const Template = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: quiz,
};
