import React from "react";

export default function Button({
  type = "button",
  variant = "outlined",
  onClick,
  children,
  ...rest
}) {
  const variantConfig = {
    outlined:
      "justify-center gap-1 px-4 py-2 rounded text-gray-800 border-1 border-gray-300 hover:bg-gray-200",
    contained:
      "justify-center gap-1 px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-700",
    "modal-close":
      "justify-center rounded-full w-7 h-7 text-gray-800 bg-gray-200 hover:bg-gray-300",
    actions:
      "justify-center text-gray-800 border-1 border-gray-300 w-8 h-8 rounded hover:bg-gray-200",
    "menu-item":
      "gap-3 w-full text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 rounded px-2 py-1 focus:ring-2",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      {...rest}
      className={`flex items-center
      focus:outline-none focus:ring-4 ${variantConfig[variant]}`}
    >
      {children}
    </button>
  );
}
