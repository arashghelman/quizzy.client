import React from "react";

export default function ProgressBar({ value, max, color }) {
  return (
    <div className={`rounded bg-gray-300`}>
      <div
        className={`rounded h-[13px] ${color} transform duration-300`}
        style={{ width: value === 0 ? "0.75rem" : `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
}
