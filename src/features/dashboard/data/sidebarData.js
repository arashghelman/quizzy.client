import React from "react";
import * as FaIcons from "react-icons/fa";

export const items = [
  {
    title: "Activity",
    path: "/activity",
    icon: <FaIcons.FaChartLine />,
  },
  {
    title: "Library",
    path: "/library",
    icon: <FaIcons.FaBook />,
    subNav: [
      {
        title: "Quizzes",
        path: "/library/quizzes",
      },
    ],
    isOpen: false,
  },
];
