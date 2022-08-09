import React from "react";
import "@/styles/NavItem.css";

export default function Button({
  type = "button",
  variant = "outlined",
  onClick,
  children,
  ...rest
}) {
  const variantConfig = {
    basic: "focus:ring-0 hover:opacity-70",
    outlined:
      "justify-center gap-2 px-4 py-2 rounded text-gray-800 border-1 border-gray-300 hover:bg-gray-200",
    contained: `justify-center gap-2 px-4 py-2 rounded text-white border-1 border-blue-500 hover:border-blue-700 
      bg-blue-500 hover:bg-blue-700`,
    "modal-close":
      "justify-center rounded-full w-8 h-8 text-gray-800 bg-gray-200 hover:bg-gray-300",
    actions:
      "justify-center text-gray-800 w-8 h-8 rounded-full hover:bg-gray-200",
    "menu-item":
      "gap-2 w-full text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 rounded p-2 focus:ring-2",
    "nav-button": "justify-between NavItem",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      {...rest}
      className={`flex items-center
      focus:outline-none focus:ring-4
      disabled:opacity-70 disabled:cursor-not-allowed ${variantConfig[variant]}`}
    >
      {children}
    </button>
  );
}
