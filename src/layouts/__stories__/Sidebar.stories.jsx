import React from "react";
import Sidebar from "../components/Sidebar";

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
