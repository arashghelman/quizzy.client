import React from "react";
import Button from "./Button";

export default function MenuItem({ children, onClick }) {
  return (
    <li className="w-full">
      <Button variant="menu-item" onClick={onClick}>
        {children}
      </Button>
    </li>
  );
}
