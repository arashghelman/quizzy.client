import React from "react";
import NavItem from "@/components/ui/NavItem";
import { navItems } from "../data/sidebarData";

export default function Sidebar() {
  return (
    <nav
      className="h-screen w-[265px] p-4
        border-r-1 bg-white"
    >
      <ul>
        {navItems.map((item, index) => (
          <NavItem key={index} data={item} />
        ))}
      </ul>
    </nav>
  );
}
