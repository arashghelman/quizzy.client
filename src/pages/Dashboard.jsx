import React from "react";
import Sidebar from "@/layouts/Sidebar";
import { items } from "@/features/dashboard/data/sidebarData";
import QuizzesPage from "@/features/dashboard/components/QuizzesPage";
import QuizPage from "@/features/quizManagement/components/QuizPage";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar items={items} />
      <main className="flex flex-col gap-10 px-16 py-6 w-full">
        {/* <QuizzesPage /> */}
        <QuizPage />
      </main>
    </div>
  );
}
