import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import PageLayout from "@/layouts/components/PageLayout";
import QuizzesPage from "@/features/quizManagement/components/QuizzesPage";
import QuizPage from "@/features/quizManagement/components/QuizPage";
import OverviewPanel from "@/features/quizManagement/components/OverviewPanel";
import QuestionsPanel from "@/features/quizManagement/components/QuestionsPanel";
import SettingsPanel from "@/features/quizManagement/components/SettingsPanel";
import { Routes, Route } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const sidebarItems = [
  {
    title: "Activity",
    path: "activity",
    icon: <FaIcons.FaChartLine />,
  },
  {
    title: "Library",
    icon: <FaIcons.FaBook />,
    subItems: [
      {
        title: "Quizzes",
        path: "quizzes",
      },
    ],
  },
];

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar>
        {sidebarItems.map((item, index) => (
          <Sidebar.Item key={index} data={item} />
        ))}
      </Sidebar>
      <PageLayout>
        <Routes>
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="quizzes/:id" element={<QuizPage />}>
            <Route index path="overview" element={<OverviewPanel />} />
            <Route path="questions" element={<QuestionsPanel />} />
            <Route path="settings" element={<SettingsPanel />} />
          </Route>
        </Routes>
      </PageLayout>
    </div>
  );
}
