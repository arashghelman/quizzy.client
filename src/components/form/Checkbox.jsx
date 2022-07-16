import React from "react";

export default function Checkbox({ label }) {
  return (
    <label className="cursor-pointer group">
      <input type="checkbox" className="appearance-none peer" />
      <span
        className="border-1 border-gray-300 peer-checked:text-blue-500 peer-checked:hover:text-blue-400 
        rounded-full 
        px-3 py-1 text-gray-500 group-hover:text-gray-400 group-hover:border-gray-200
        peer-checked:border-blue-500 peer-checked:hover:border-blue-400"
      >
        {label}
      </span>
    </label>
  );
}
