import React from "react";
import QuizzesPage from "../features/dashboard/components/QuizzesPage";
import SideNavbar from "./Dashboard/SideNavbar";

export default function Dashboard() {
  return (
    <div className="flex">
      <SideNavbar />
      <main className="flex flex-col gap-10 px-16 py-6 w-full">
        <QuizzesPage />
      </main>
    </div>
  );
}
