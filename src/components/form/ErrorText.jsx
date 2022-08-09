import React from "react";
import * as BiIcons from "react-icons/bi";

export default function ErrorText({ children }) {
  return (
    <p className="text-red-500 text-base flex items-center gap-2">
      <BiIcons.BiErrorCircle />
      {children}
    </p>
  );
}
