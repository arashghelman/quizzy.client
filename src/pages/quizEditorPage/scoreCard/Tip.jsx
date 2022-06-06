import React from "react";
import CheckIcon from "remixicon-react/CheckFillIcon";

export default function Tip({ isDone, label }) {
  return (
    <div className="flex items-center gap-tight text-light-1">
      {isDone && <CheckIcon className="text-emerald-base w-base" />}
      <span className={isDone ? "opacity-60 hover:opacity-75" : "opacity-100"}>
        {label}
      </span>
    </div>
  );
}
