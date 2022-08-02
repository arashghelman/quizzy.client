import React from "react";
import QuizPage from "../QuizPage";
import PageLayout from "@/layouts/components/PageLayout";

export default {
  title: "Pages/Dashboard/Routes/Quiz Page",
  component: QuizPage,
  decorators: [
    (Story) => (
      <PageLayout>
        <Story />
      </PageLayout>
    ),
  ],
};

const Template = (args) => <QuizPage {...args} />;

export const Default = Template.bind({});
