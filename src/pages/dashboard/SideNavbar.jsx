import React from "react";
import NavLink from "./sideNavbar/NavLink";
import ActivityIcon from "remixicon-react/LineChartLineIcon";
import LibraryIcon from "remixicon-react/Book3FillIcon";

export default function SideNavbar() {
  return (
    <nav className="h-screen w-[265px] border-r-1 border-gray-300 px-4 py-6">
      <ul>
        <NavLink href="#">
          <ActivityIcon className="w-4" />
          Activity
        </NavLink>
        <NavLink>
          <LibraryIcon className="w-4" />
          Library
        </NavLink>
      </ul>
    </nav>
  );
}
