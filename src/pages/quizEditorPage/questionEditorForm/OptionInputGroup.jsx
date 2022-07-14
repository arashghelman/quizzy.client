import React from "react";
import OptionInputRadio from "./optionInputGroup/OptionInputRadio";

export default function OptionInputGroup({ bgColor }) {
  return (
    <div className={`flex flex-col gap-2 rounded-lg p-4 ${bgColor}`}>
      <div className="flex self-end">
        <OptionInputRadio />
      </div>
      <div className="flex justify-center px-2">
        <textarea
          placeholder="Type your option here..."
          className="py-20 text-gray-base placeholder:text-gray-light-2 text-center 
          resize-none text-2xl bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
}
