import React from "react";
import { questionType } from "@/constants/questionType";
import QuestionTypeMenuButton from "@/components/QuestionTypeMenuButton";

export default function QuestionTypeMenuList() {
  return (
    <div className="absolute w-full z-10 border-1 rounded mt-1 overflow-hidden shadow">
      <QuestionTypeMenuButton type={questionType.MULTIPLE_CHOICE} />
      <QuestionTypeMenuButton type={questionType.POLL} />
    </div>
  );
}
