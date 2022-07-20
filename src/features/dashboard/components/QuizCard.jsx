import React from "react";
import ActionsMenu from "@/components/ui/ActionsMenu";
import MenuItem from "@/components/ui/MenuItem";
import Thumbnail from "@/components/ui/Thumbnail";

export default function QuizCard() {
  return (
    <div className="relative flex justify-between items-center cursor-pointer hover:bg-gray-100 border-b-1 p-4">
      <div className="flex gap-4">
        <Thumbnail url="https://corridorchapter.nl/wp-content/uploads/2020/05/quiz.jpg" />
        <div className="flex flex-col gap-1">
          <a className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
            English Test
          </a>
          <span className="text-gray-500">Public</span>
        </div>
      </div>
      <span className="text-gray-500">Created 2 days ago</span>
      <ActionsMenu>
        <MenuItem>Overview</MenuItem>
        <MenuItem>Settings</MenuItem>
      </ActionsMenu>
    </div>
  );
}
