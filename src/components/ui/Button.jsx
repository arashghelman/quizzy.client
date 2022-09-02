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
      className={`${variant}
      focus:outline-none focus:ring-4
      disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
