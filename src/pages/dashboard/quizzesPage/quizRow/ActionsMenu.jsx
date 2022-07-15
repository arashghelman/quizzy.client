import React from "react";

export default function ActionsMenu({ children }) {
  return (
    <div className="w-44 flex flex-col gap-1 absolute shadow-md p-2 z-20 bg-white border-1 rounded">
      {children}
    </div>
  );
}
