import React from "react";

export default function MenuItem({ children }) {
  return (
    <a
      href="#"
      className="w-full px-2 py-1 rounded text-sm 
      text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:ring-2"
    >
      {children}
    </a>
  );
}
