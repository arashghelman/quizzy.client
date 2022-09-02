import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinkWrapper({ path, isSub, children }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `NavItem ${isSub && "font-normal"} ${
          isActive ? "text-blue-500" : "text-gray-800"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
