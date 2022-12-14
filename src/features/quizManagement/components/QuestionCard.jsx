import React from "react";
import Menu from "@/components/ui/Menu";
import MenuItem from "@/components/ui/MenuItem";
import { IconContext } from "react-icons/lib";
import { menuItemType } from "@/components/data/menuItemType";
import * as FaIcons from "react-icons/fa";

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
        <Menu>
          <MenuItem type={menuItemType.BUTTON}>
            <FaIcons.FaPen />
            Edit
          </MenuItem>
          <MenuItem type={menuItemType.BUTTON}>
            <FaIcons.FaTrashAlt />
            Delete
          </MenuItem>
          <MenuItem type={menuItemType.BUTTON}>
            <FaIcons.FaCopy />
            Duplicate
          </MenuItem>
          {actions}
        </Menu>
      </div>
      <ul className="grid gap-4">{answersList}</ul>
    </div>
  );
}
