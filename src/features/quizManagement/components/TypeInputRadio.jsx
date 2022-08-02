import React from "react";

export default function TypeInputRadio({ data }) {
  return (
    <label>
      <input type="radio" className="absolute invisible peer" />
      <div
        className="flex flex-col items-center gap-4 text-gray-800 border-1 rounded py-6 group cursor-pointer 
      hover:border-gray-300 hover:bg-gray-100 group peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-focus:ring-4"
      >
        <div
          className={`${data.bgColor} rounded-full w-12 h-12 flex items-center justify-center`}
        >
          {data.icon}
        </div>
        <span className="text-center">{data.label}</span>
      </div>
    </label>
  );
}
