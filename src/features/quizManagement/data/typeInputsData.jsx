import React from "react";
import { questionType } from "@/data/questionType";
import * as FaIcons from "react-icons/fa";

export const types = [
  {
    label: "Multiple-choice",
    value: questionType.MultipleChoice,
    bgColor: "bg-emerald-100",
    icon: <FaIcons.FaCheck className="text-emerald-500 w-5 h-5" />,
  },
  {
    label: "Poll",
    value: questionType.Poll,
    bgColor: "bg-blue-100",
    icon: <FaIcons.FaPoll className="text-blue-500 w-6 h-6" />,
  },
];
