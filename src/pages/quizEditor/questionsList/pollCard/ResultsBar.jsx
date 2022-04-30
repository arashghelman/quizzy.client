import React from "react";

export default function ResultsBar({ value }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`bg-blue-400 h-2 rounded transform duration-75`}
        style={{ width: `${value}%` }}
      ></div>
      <span className="text-sm text-primary">{value}%</span>
    </div>
  );
}
