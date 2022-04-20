import Header from "./Header";
import { quiz } from "@/utils/mockData";

export default {
  title: "QuizEditor/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    name: quiz.name,
    status: quiz.status,
    description: quiz.description,
    thumbnailUrl: quiz.thumbnail,
  },
};
