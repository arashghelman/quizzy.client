import React from "react";

export default function NavLink({ children }) {
  return (
    <a
      href="#"
      className={`flex items-center justify-between w-full 
        text-gray-800 hover:text-blue-500 active:text-blue-500 
        rounded p-2 cursor-pointer focus:ring-4`}
    >
      {children}
    </a>
  );
}
