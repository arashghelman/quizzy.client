import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { quiz, quizState, questions } from "@/utils/fakeData";
import Header from "./quizEditorPage/Header";
import QuestionsContainer from "./quizEditorPage/QuestionsContainer";
import ScoreCard from "./quizEditorPage/ScoreCard";

export default function QuizEditorPage() {
  return (
    <div className="flex flex-col gap-extra-loose">
      <Header data={quiz} />
      <div className="flex gap-loose px-4">
        <DndProvider backend={HTML5Backend}>
          <QuestionsContainer questions={questions} />
        </DndProvider>
        <div className="w-1/3">
          <ScoreCard quizState={quizState} />
        </div>
      </div>
    </div>
  );
}
