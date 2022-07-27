import React from "react";
import ActionsMenu from "@/components/ui/ActionsMenu";
import MenuItem from "@/components/ui/MenuItem";
import { IconContext } from "react-icons/lib";
import * as HiIcons from "react-icons/hi";

export default function QuestionCard({
  data: { title, number },
  icon,
  actions,
  answersList,
}) {
  return (
    <div className="flex flex-col gap-4 border-b-1 p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="flex items-center justify-center bg-gray-100 text-gray-500 w-12 h-12 rounded">
            <IconContext.Provider value={{ className: "w-5 h-5" }}>
              {icon}
            </IconContext.Provider>
          </div>
          <div className="flex flex-col gap-2 text-gray-800">
            <span className="text-sm">Question {number}</span>
            <h1 className="font-semibold text-lg">Q. {title}</h1>
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
      <ul className="grid gap-4">{answersList}</ul>
    </div>
  );
}
