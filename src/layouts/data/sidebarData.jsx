import React from "react";
import * as FaIcons from "react-icons/fa";

export const navItems = [
  {
    title: "Activity",
    path: "activity",
    icon: <FaIcons.FaChartLine />,
  },
  {
    title: "Library",
    icon: <FaIcons.FaBook />,
    subNav: [
      {
        title: "Quizzes",
        path: "quizzes",
      },
    ],
  },
];
