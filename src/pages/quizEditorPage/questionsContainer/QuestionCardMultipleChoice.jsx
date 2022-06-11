import React from "react";
import { questionType } from "@/constants/questionType";
import QuestionIcon from "@/components/QuestionIcon";
import QuestionCard from "./QuestionCard";
import OptionLabel from "./questionCard/OptionLabel";

export default function QuestionCardMultipleChoice({
  data: { options, ...rest },
  ...props
}) {
  return (
    <QuestionCard
      config={{
        icon: <QuestionIcon type={questionType.MULTIPLE_CHOICE} />,
        color: "bg-amber-base",
      }}
      data={{ ...rest }}
      optionsList={options.map((opt) => (
        <OptionLabel
          key={opt.id}
          color={opt.isCorrect ? "bg-emerald-light-1" : "bg-pink-400"}
          label={opt.value}
        />
      ))}
      {...props}
    />
  );
}
