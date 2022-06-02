import React from "react";

export default function Button({
  type = "button",
  variant,
  onClick,
  children,
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      {...rest}
      className={`flex items-center gap-tight ${variant}`}
    >
      {children}
    </button>
  );
}
