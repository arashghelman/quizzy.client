import React from "react";
import { NavLink } from "react-router-dom";

function TabBar({ children }) {
  return <div className="flex gap-6 border-b-1">{children}</div>;
}

function Tab({ path, children }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `py-2 hover:text-blue-500 ${
          isActive
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-500"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

TabBar.Tab = Tab;
export default TabBar;
