import React from "react";
import Sidebar from "@/layouts/Sidebar";
import { items } from "@/features/dashboard/data/sidebarData";
import PageLayout from "@/layouts/PageLayout";
import QuizzesPage from "@/features/dashboard/components/QuizzesPage";
import QuizPage from "@/features/quizManagement/components/QuizPage";
import OverviewPanel from "@/features/quizManagement/components/OverviewPanel";
import QuestionsPanel from "@/features/quizManagement/components/QuestionsPanel";
import SettingsPanel from "@/features/quizManagement/components/SettingsPanel";
import { Routes, Route } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar items={items} />
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
