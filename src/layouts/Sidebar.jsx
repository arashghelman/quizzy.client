import React from "react";
import NavItem from "@/components/ui/NavItem";

export default function Sidebar({ items }) {
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
