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
      className={`flex justify-center items-center gap-2 ${variant}`}
    >
      {children}
    </button>
  );
}
