import React from "react";
import * as FaIcons from "react-icons/fa";

export const types = [
  {
    label: "Multiple-choice",
    bgColor: "bg-amber-100",
    icon: <FaIcons.FaCheck className="text-amber-500 w-5 h-5" />,
  },
  {
    label: "Poll",
    bgColor: "bg-blue-100",
    icon: <FaIcons.FaPoll className="text-blue-500 w-6 h-6" />,
  },
];
