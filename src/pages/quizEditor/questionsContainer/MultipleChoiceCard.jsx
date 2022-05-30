import React from "react";
import QuestionCard from "./QuestionCard";
import Option from "./questionCard/Option";
import MultipleChoiceIcon from "remixicon-react/CheckboxMultipleLineIcon";

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
        icon: <MultipleChoiceIcon className="w-base" />,
        color: "bg-amber-base",
      }}
      data={{ optionsElement, ...rest }}
      {...props}
    />
  );
}
