import React from "react";
import NavItem from "@/components/ui/NavItem";
import { items } from "../data/sidebarData";

export default function Sidebar() {
  return (
    <nav
      className="h-screen w-[265px] p-4
        border-r-1 bg-white"
    >
      <ul>
        {items.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
}
