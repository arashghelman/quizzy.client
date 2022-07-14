import React from "react";
import DropdownMenu from "./DropdownMenu";

export default {
  title: "Components/Dropdown Menu",
  component: <DropdownMenu />,
  argTypes: {
    size: {
      options: ["base", "sm"],
      control: { type: "radio" },
      defaultValue: "base",
    },
  },
};

const Template = (args) => <DropdownMenu {...args} />;

const menuItems = [
  { id: "1", content: "Item 1", isSelected: true },
  { id: "2", content: "Item 2", isSelected: false },
  { id: "3", content: "Item 3", isSelected: false },
];

export const Default = Template.bind({});
Default.args = {
  items: menuItems,
};
