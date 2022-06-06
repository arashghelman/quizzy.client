import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { quiz, quizState, questions } from "@/utils/fakeData";
import QuizEditorHeader from "./quizEditorPage/QuizEditorHeader";
import QuestionsContainer from "./quizEditorPage/QuestionsContainer";
import QuizScoreCard from "./quizEditorPage/QuizScoreCard";

export default function QuizEditorPage() {
  return (
    <div className="flex flex-col gap-extra-loose">
      <QuizEditorHeader data={quiz} />
      <div className="flex gap-loose px-4">
        <DndProvider backend={HTML5Backend}>
          <QuestionsContainer questions={questions} />
        </DndProvider>
        <div className="w-1/3">
          <QuizScoreCard quizState={quizState} />
        </div>
      </div>
    </div>
  );
}
