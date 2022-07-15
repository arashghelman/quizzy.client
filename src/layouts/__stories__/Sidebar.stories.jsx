import React from "react";
import Sidebar from "../Sidebar";
import { items } from "@/features/dashboard/data/sidebarData";

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items,
};
