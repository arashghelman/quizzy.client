import React from "react";
import CheckIcon from "remixicon-react/CheckFillIcon";

export default function OptionInputRadio() {
  return (
    <label
      className="relative cursor-pointer border-[3px] w-8 h-8 
    border-white rounded-full group"
    >
      <input type="radio" className="appearance-none peer" />
      <CheckIcon
        className="absolute rounded-full left-px top-px
        text-white/70 group-hover:text-white peer-checked:text-white
        bg-black/40  peer-checked:bg-emerald-light-1"
      />
    </label>
  );
}
