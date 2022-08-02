import React from "react";

export default function Label({ id, children }) {
  return (
    <label htmlFor={id} className="text-gray-800 font-semibold text-base">
      {children}
    </label>
  );
}
