import Status from "./Status";

export default {
  title: "QuizEditor/Header/Status",
  component: Status,
};

const Template = (args) => <Status {...args} />;

export const Public = Template.bind({});
Public.args = {
  label: "Public",
};

export const Draft = Template.bind({});
Draft.args = {
  label: "Draft",
};
