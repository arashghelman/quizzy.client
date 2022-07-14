import React from "react";
import StatusLabel from "./StatusLabel";

export default {
  title: "Pages/Quiz Editor/Tags & Labels/Status Label",
  component: StatusLabel,
};

const Template = (args) => <StatusLabel {...args} />;

export const Public = Template.bind({});
Public.args = {
  label: "Public",
};

export const Draft = Template.bind({});
Draft.args = {
  label: "Draft",
};
