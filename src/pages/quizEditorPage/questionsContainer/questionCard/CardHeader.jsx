import React from "react";

export default function CardHeader({ icon, data: { title, number } }) {
  return (
    <div className="flex items-center text-gray-base gap-base">
      {icon}
      <div className="flex flex-col gap-extra-tight">
        <span className="text-sm">Question {number}</span>
        <h1 className="text-lg font-semibold">Q. {title}</h1>
      </div>
    </div>
  );
}
