import React from "react";

export default function MenuItem({ isSelected, onClick, children, size }) {
  return (
    <li
      onClick={onClick}
      className={`flex text-gray-base bg-white hover:bg-gray-light-3 
      font-semibold gap-tight items-center px-4 ${size} cursor-pointer border-b-1 last:border-b-0 ${
        isSelected && "bg-gray-light-3"
      }`}
    >
      {children}
    </li>
  );
}
