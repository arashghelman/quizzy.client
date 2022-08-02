import React from "react";

export default function TypeInputRadio({ type }) {
  return (
    <label>
      <input type="radio" className="absolute invisible peer" />
      <div
        className="flex flex-col items-center gap-4 text-gray-800 border-1 rounded py-6 group cursor-pointer 
      hover:border-gray-300 hover:bg-blue-50 group peer-checked:border-blue-500 peer-checked:shadow-innerFocus"
      >
        <div
          className={`${type.bgColor} rounded-full w-12 h-12 flex items-center justify-center`}
        >
          {type.icon}
        </div>
        <span className="text-center">{type.label}</span>
      </div>
    </label>
  );
}
