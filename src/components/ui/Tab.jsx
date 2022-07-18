import React from "react";

export default function Tab({ label }) {
  return (
    <div>
      <a
        href="#"
        className="py-3 text-gray-500 hover:text-blue-500 
        active:text-blue-500 active:border-b-2 active:border-blue-500"
      >
        {label}
      </a>
    </div>
  );
}
