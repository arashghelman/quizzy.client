import React from "react";
import MultipleChoiceCard from "./questionsList/MultipleChoiceCard";
import PollCard from "./questionsList/PollCard";

export default function QuestionsList({ data }) {
  const questionsList = data.map((item, index) => {
    const number = ++index;

    switch (item.type) {
      case "MultipleChoice":
        return (
          <MultipleChoiceCard
            key={item.id}
            data={{ ...item, number: number }}
          />
        );

      case "Poll":
        return <PollCard key={item.id} data={{ ...item, number: number }} />;

      default:
        throw new Error("No component was found for the type!");
    }
  });

  return (
    <div role="list" className="flex flex-col gap-6">
      {questionsList}
    </div>
  );
}
