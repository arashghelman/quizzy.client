import React from "react";
import ActionsMenu from "@/components/ui/ActionsMenu";
import MenuItem from "@/components/ui/MenuItem";
import { IconContext } from "react-icons/lib";
import * as HiIcons from "react-icons/hi";

export default function QuestionCard({ icon, actions, answersList }) {
  return (
    <div className="flex flex-col gap-5 border-b-1 pb-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="flex items-center justify-center bg-gray-100 text-gray-500 w-11 h-11 rounded">
            <IconContext.Provider value={{ className: "w-5 h-5" }}>
              {icon}
            </IconContext.Provider>
          </div>
          <div className="flex flex-col gap-1 text-gray-800">
            <span className="text-sm">Question 1</span>
            <h1 className="font-semibold text-lg">Q. What is it?</h1>
          </div>
        </div>
        <ActionsMenu>
          <MenuItem>
            <HiIcons.HiPencil />
            Edit
          </MenuItem>
          <MenuItem>
            <HiIcons.HiTrash />
            Delete
          </MenuItem>
          <MenuItem>
            <HiIcons.HiDuplicate />
            Duplicate
          </MenuItem>
          {actions}
        </ActionsMenu>
      </div>
      {answersList}
    </div>
  );
}
