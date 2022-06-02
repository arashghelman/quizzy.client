import React from "react";
import { questionType } from "@/constants/questionType";
import SelectTypeButton from "./selectTypeMenu/SelectTypeButton";

export default function SelectTypeMenu() {
  return (
    <div
      role="list"
      className="absolute bg-white border-1 rounded w-full mt-extra-tight 
        text-gray-base shadow"
    >
      <SelectTypeButton
        type={questionType.MULTIPLE_CHOICE}
        label="Multiple-choice"
      />
      <SelectTypeButton type={questionType.POLL} label="Poll" />
    </div>
  );
}
