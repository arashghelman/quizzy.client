import React from "react";

export default function Button({
  type = "button",
  variant = "primary",
  customStyle,
  onClick,
  children,
  ...rest
}) {
  const variantConfig = {
    primary: `text-gray-800 bg-white border-1 border-gray-300 hover:bg-gray-200`,
    blue: `px-3 py-2 bg-blue-500 hover:bg-blue-700 text-white`,
  };
  return (
    <button
      type={type}
      onClick={onClick}
      {...rest}
      className={`flex justify-center items-center rounded focus:ring-4 
        ${variantConfig[variant]} ${customStyle}`}
    >
      {children}
    </button>
  );
}
