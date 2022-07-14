import React from "react";

export default function SubjectCheckbox({ label }) {
  return (
    <label className="cursor-pointer select-none">
      <input type="checkbox" className="appearance-none peer" />
      <span
        className="rounded-full bg-gray-light-3 hover:bg-gray-200 px-4 py-1 
        text-gray-light-2 peer-checked:bg-emerald-light-1 peer-checked:hover:bg-emerald-light-1/80 peer-checked:text-white
        transition duration-75"
      >
        {label}
      </span>
    </label>
  );
}
