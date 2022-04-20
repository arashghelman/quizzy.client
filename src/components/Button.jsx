import React from "react";

export default function Button({ type = "button", variant, children }) {
  return (
    <button type={type} className={`flex items-center gap-2 ${variant}`}>
      {children}
    </button>
  );
}
