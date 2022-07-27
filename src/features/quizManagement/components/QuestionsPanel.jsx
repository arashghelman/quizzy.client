import React from "react";
import QuestionCardMultipleChoice from "./QuestionCardMultipleChoice";
import QuestionCardPoll from "./QuestionCardPoll";
import { questionType } from "@/data/questionType";
import { useParams } from "react-router-dom";
import { quizzes } from "@/data/fakeQuizzes";

export default function QuestionsPanel() {
  const { id } = useParams();
  const questions = quizzes.find((quiz) => quiz.id === id)?.questions;

  const questionsList = questions.map((question, index) => {
    const props = { ...question, number: ++index };
    switch (question.type) {
      case questionType.MultipleChoice:
        return <QuestionCardMultipleChoice data={props} />;

      case questionType.Poll:
        return <QuestionCardPoll data={props} />;

      default:
        throw new Error("No component was found for the type");
    }
  });

  return <div className="grid">{questionsList}</div>;
}
