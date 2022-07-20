import React from "react";
import { IconContext } from "react-icons/lib";

export default function AnswerItem({ label, icon, textColor, bgColor }) {
  return (
    <li className="flex items-center gap-3 text-gray-800">
      <span
        className={`rounded-full w-5 h-5 flex items-center justify-center ${textColor} ${bgColor}`}
      >
        <IconContext.Provider value={{ className: "w-6 h-6" }}>
          {icon}
        </IconContext.Provider>
      </span>
      {label}
    </li>
  );
}
