import React from "react";

export default function Header({ icon, color, data: { title, number } }) {
  return (
    <div className="flex items-center text-gray-base gap-base">
      <div
        className={`${color} flex justify-center items-center rounded w-12 h-12`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-extra-tight">
        <span className="text-sm">Question {number}</span>
        <h1 className="text-lg font-semibold">Q. {title}</h1>
      </div>
    </div>
  );
}
