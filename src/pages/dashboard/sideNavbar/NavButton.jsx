import React from "react";
import "./NavItem.css";
import ArrowIcon from "remixicon-react/ArrowRightSLineIcon";

export default function NavButton({ children }) {
  return (
    <li>
      <button className="NavItem justify-between">
        <div className="flex gap-2 items-center">{children}</div>
        <ArrowIcon className="w-4 text-gray-500" />
      </button>
    </li>
  );
}
