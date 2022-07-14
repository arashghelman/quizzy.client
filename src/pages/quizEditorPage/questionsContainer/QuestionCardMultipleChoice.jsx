import React from "react";
import { getQuestionConfig } from "@/utils/getQuestionConfig";
import { questionType } from "@/constants/questionType";
import QuestionCard from "./QuestionCard";
import OptionLabel from "./questionCard/OptionLabel";

export default function QuestionCardMultipleChoice({
  data: { options, ...rest },
  ...props
}) {
  const { Icon, color } = getQuestionConfig(questionType.MULTIPLE_CHOICE);

  return (
    <QuestionCard
      data={{ ...rest }}
      icon={<Icon />}
      barColor={color}
      optionsList={options.map((opt) => (
        <OptionLabel
          key={opt.id}
          color={opt.isCorrect ? "bg-emerald-light-1" : "bg-pink-base"}
          label={opt.value}
        />
      ))}
      {...props}
    />
  );
}
