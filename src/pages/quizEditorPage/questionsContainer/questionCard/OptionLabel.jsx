import React from "react";

export default function OptionLabel({ color, label }) {
  return (
    <div className="text-gray-base flex items-center gap-3">
      <span className={`${color} w-3 h-3 inline-block rounded-full`}></span>
      {label}
    </div>
  );
}
