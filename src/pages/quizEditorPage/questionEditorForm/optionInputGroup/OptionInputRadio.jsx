import React from "react";
import CheckIcon from "remixicon-react/CheckFillIcon";

export default function OptionInputRadio() {
  return (
    <label className="flex cursor-pointer group">
      <input type="radio" className="appearance-none peer" />
      <CheckIcon
        className="border-[3px] border-white w-8 h-8 rounded-full left-0 top-0 right-0 bottom-0
        text-white/70 group-hover:text-white peer-checked:text-white
        bg-black/20  peer-checked:bg-emerald-light-1"
      />
    </label>
  );
}
