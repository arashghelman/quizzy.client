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
      "px-4 py-2 rounded text-gray-800 border-1 border-gray-300 hover:bg-gray-200",
    contained: "px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-700",
    "modal-close":
      "rounded-full w-7 h-7 text-gray-800 bg-gray-200 hover:bg-gray-300",
    actions: "border-1 border-gray-300 w-8 h-8 rounded hover:bg-gray-200",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      {...rest}
      className={`flex justify-center items-center gap-1
      focus:outline-none focus:ring-4 ${variantConfig[variant]}`}
    >
      {children}
    </button>
  );
}
