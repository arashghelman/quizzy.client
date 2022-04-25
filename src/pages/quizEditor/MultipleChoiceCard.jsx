import React from "react";
import QuestionCard from "./QuestionCard";
import Option from "./questionCard/Option";
import MultipleChoiceIcon from "remixicon-react/CheckboxMultipleLineIcon";

export default function MultipleChoiceCard({
  data: { title, number, options },
}) {
  const optionsList = options.map((opt) => (
    <Option color={opt.isCorrect ? "bg-emerald-400" : "bg-pink-400"}>
      {opt.value}
    </Option>
  ));

  return (
    <QuestionCard
      config={{
        icon: <MultipleChoiceIcon className="w-base" />,
        color: "bg-amber-200",
      }}
      data={{ title, number, optionsList }}
    />
  );
}
