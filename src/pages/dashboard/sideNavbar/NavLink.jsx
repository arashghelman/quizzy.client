import React from "react";
import "./NavItem.css";

export default function NavLink({ href, isChild, children }) {
  return (
    <li>
      <a href={href} className={`NavItem ${isChild && "font-normal"}`}>
        {children}
      </a>
    </li>
  );
}
