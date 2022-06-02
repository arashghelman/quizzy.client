import React from "react";
import { questionType } from "@/constants/questionType";
import QuestionIcon from "@/components/QuestionIcon";
import QuestionCard from "./QuestionCard";
import Option from "./questionCard/Option";

export default function MultipleChoiceCard({
  data: { options, ...rest },
  ...props
}) {
  const optionsElement = options.map((opt) => (
    <Option
      key={opt.id}
      color={opt.isCorrect ? "bg-emerald-light-1" : "bg-pink-400"}
    >
      {opt.value}
    </Option>
  ));

  return (
    <QuestionCard
      config={{
        icon: (
          <QuestionIcon type={questionType.MULTIPLE_CHOICE} size="w-base" />
        ),
        color: "bg-amber-base",
      }}
      data={{ optionsElement, ...rest }}
      {...props}
    />
  );
}
