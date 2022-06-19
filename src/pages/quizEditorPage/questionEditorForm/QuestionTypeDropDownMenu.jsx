import React, { useState } from "react";
import { questionType } from "@/constants/questionType";
import QuestionTypeMenuButton from "@/components/QuestionTypeMenuButton";
import QuestionTypeMenuList from "@/components/QuestionTypeMenuList";

export default function QuestionTypeDropDownMenu() {
  const [isShowingMenuList, setIsShowingMenuList] = useState(false);
  return (
    <div className="relative">
      <QuestionTypeMenuButton
        type={questionType.MULTIPLE_CHOICE}
        isSelected
        onClick={() => setIsShowingMenuList((prev) => !prev)}
      />
      {isShowingMenuList && <QuestionTypeMenuList />}
    </div>
  );
}
