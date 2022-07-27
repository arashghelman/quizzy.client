import React from "react";
import QuizzesPage from "../QuizzesPage";
import PageLayout from "@/layouts/PageLayout";

export default {
  title: "Pages/Dashboard/Routes/Quizzes Page",
  component: QuizzesPage,
  decorators: [
    (Story) => (
      <PageLayout>
        <Story />
      </PageLayout>
    ),
  ],
};

const Template = (args) => <QuizzesPage {...args} />;

export const Default = Template.bind({});
