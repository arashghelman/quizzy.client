import React from "react";
import { NavLink } from "react-router-dom";

export default function TabBar({ items }) {
  return (
    <div className="flex gap-6 border-b-1">
      {items.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({ isActive }) =>
            `py-2 hover:text-blue-500 ${
              isActive
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
