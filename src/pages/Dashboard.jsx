import React from "react";
import QuizzesPage from "./dashboard/QuizzesPage";
import SideNavbar from "./dashboard/SideNavbar";

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
