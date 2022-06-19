import React from "react";
import QuestionIcon from "./QuestionIcon";
import ArrowDownIcon from "remixicon-react/ArrowDownSFillIcon";
import { questionType } from "@/constants/questionType";
import Button from "./Button";

export default function QuestionTypeMenuButton({ type, isSelected, onClick }) {
  const label = {
    [questionType.MULTIPLE_CHOICE]: "Multiple-choice",
    [questionType.POLL]: "Poll",
  };
  return (
    <Button
      variant={`bg-white text-gray-base font-semibold
      gap-extra-loose py-tight px-base w-full hover:bg-gray-light-3 ${
        isSelected && "rounded border-1"
      } ${!isSelected && "border-b-1 last:border-b-0"}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-base">
        <QuestionIcon type={type} size="sm" />
        {label[type]}
      </div>
      {isSelected && <ArrowDownIcon className="w-base text-gray-base" />}
    </Button>
  );
}
