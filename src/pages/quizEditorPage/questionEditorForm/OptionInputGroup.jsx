import React from "react";
import InputTextArea from "./InputTextArea";
import OptionInputRadio from "./optionInputGroup/OptionInputRadio";

export default function OptionInputGroup({ bgColor }) {
  return (
    <div className={`flex flex-col gap-tight rounded-lg p-base ${bgColor}`}>
      <div className="flex justify-end">
        <OptionInputRadio />
      </div>
      <div className="flex justify-center px-base">
        <InputTextArea placeholder="Type an answer option here..." />
      </div>
    </div>
  );
}
