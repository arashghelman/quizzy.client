import React from "react";

export default function PollItem({ label, value }) {
  return (
    <li className="flex gap-5 text-gray-800">
      {value}%
      <div className="flex flex-col gap-2 w-1/2">
        {label}
        <div
          className="bg-blue-500 rounded-full h-2"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </li>
  );
}
