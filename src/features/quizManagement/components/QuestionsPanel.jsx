import React from "react";
import QuestionCardMultipleChoice from "./QuestionCardMultipleChoice";
import QuestionCardPoll from "./QuestionCardPoll";

export default function QuestionsPanel() {
  return (
    <>
      <div className="grid gap-5">
        <QuestionCardMultipleChoice />
        <QuestionCardPoll />
      </div>
    </>
  );
}
