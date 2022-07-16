import React from "react";
import InputText from "../InputText";

export default {
  title: "Components/Form/InputText",
  component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};
