import React from "react";

export default function Option({ color, children }) {
  return (
    <div className="text-primary flex items-center gap-3">
      <span className={`${color} w-3 h-3 inline-block rounded-full`}></span>
      {children}
    </div>
  );
}
