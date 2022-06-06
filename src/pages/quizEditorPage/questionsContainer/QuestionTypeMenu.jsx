import React from "react";
import { questionType } from "@/constants/questionType";
import QuestionTypeButton from "./questionTypeMenu/QuestionTypeButton";

export default function QuestionTypeMenu() {
  return (
    <div
      role="list"
      className="absolute bg-white border-1 rounded w-full mt-extra-tight 
        text-gray-base shadow"
    >
      <QuestionTypeButton
        type={questionType.MULTIPLE_CHOICE}
        label="Multiple-choice"
      />
      <QuestionTypeButton type={questionType.POLL} label="Poll" />
    </div>
  );
}
