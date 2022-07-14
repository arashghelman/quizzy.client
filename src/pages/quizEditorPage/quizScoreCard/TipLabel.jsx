import React from "react";
import CheckIcon from "remixicon-react/CheckFillIcon";

export default function TipLabel({ isDone, label }) {
  return (
    <div className="flex items-center gap-2 text-gray-light-1">
      {isDone && <CheckIcon className="text-emerald-base w-6" />}
      <span className={isDone ? "opacity-60 hover:opacity-75" : "opacity-100"}>
        {label}
      </span>
    </div>
  );
}
