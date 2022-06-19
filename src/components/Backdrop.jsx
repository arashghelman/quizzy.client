import React from "react";

export default function Backdrop({ children }) {
  return (
    <div className="bg-[#666666] fixed top-0 bottom-0 left-0 right-0">
      {children}
    </div>
  );
}
