import React from "react";
import Sidebar from "../../components/layout/Sidebar";

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
