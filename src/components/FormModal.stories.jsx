import React from "react";
import FormModal from "./FormModal";

export default {
  title: "Components/Form Modal",
  component: FormModal,
};

const Template = (args) => <FormModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Heading",
  children: null,
};
