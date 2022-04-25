import React from "react";

export default function Button({
  type = "button",
  variant,
  onClick,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 ${variant}`}
    >
      {children}
    </button>
  );
}
