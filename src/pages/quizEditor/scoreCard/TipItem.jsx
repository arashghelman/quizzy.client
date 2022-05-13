import React from "react";
import CheckIcon from "remixicon-react/CheckFillIcon";

export default function TipItem({ isDone, label }) {
  return (
    <div className="flex items-center gap-tight text-lighter">
      {isDone && <CheckIcon className="text-emerald-500 w-base" />}
      <span className={isDone ? "opacity-60 hover:opacity-75" : "opacity-100"}>
        {label}
      </span>
    </div>
  );
}
