import React from "react";
import Thumbnail from "@/components/ui/Thumbnail";
import Heading from "@/components/ui/Heading";
import TabBar from "@/components/ui/TabBar";
import Tab from "@/components/ui/Tab";
import { tabs } from "../data/tabBarData";
import OverviewPanel from "./OverviewPanel";
import * as HiIcons from "react-icons/hi";
import QuestionsPanel from "./QuestionsPanel";
import SettingsPanel from "./SettingsPanel";

export default function QuizPage() {
  const panels = {
    1: <OverviewPanel />,
    2: <QuestionsPanel />,
    3: <SettingsPanel />,
  };

  const [tabValue, setTabValue] = React.useState(2);

  return (
    <>
      <div className="flex flex-col gap-4">
        <a
          href="#"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800"
        >
          <HiIcons.HiOutlineArrowLeft />
          Back to Quizzes
        </a>
        <div className="flex gap-6">
          <Thumbnail
            size="md"
            url="https://corridorchapter.nl/wp-content/uploads/2020/05/quiz.jpg"
          />
          <div className="flex flex-col gap-2">
            <Heading>English Test</Heading>
            <span className="text-gray-500">Public</span>
          </div>
        </div>
      </div>
      <TabBar>
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} />
        ))}
      </TabBar>
      {panels[tabValue]}
    </>
  );
}
