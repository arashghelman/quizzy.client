import React, { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { quiz, quizState, questions } from "@/utils/fakeData";
import PageHeader from "./quizEditorPage/PageHeader";
import QuestionsContainer from "./quizEditorPage/QuestionsContainer";
import QuizScoreCard from "./quizEditorPage/QuizScoreCard";
import Backdrop from "@/components/Backdrop";
import QuestionEditorForm from "./quizEditorPage/QuestionEditorForm";

export default function QuizEditorPage() {
  const [isShowingQuestionEditor, setIsShowingQuestionEditor] = useState(false);
  return (
    <div className="flex flex-col gap-extra-loose">
      <PageHeader data={quiz} />
      <div className="flex gap-loose px-4">
        <DndProvider backend={HTML5Backend}>
          <QuestionsContainer questions={questions} />
        </DndProvider>
        <div className="w-1/3">
          <QuizScoreCard quizState={quizState} />
        </div>
      </div>
      {isShowingQuestionEditor && (
        <Backdrop>
          <QuestionEditorForm />
        </Backdrop>
      )}
    </div>
  );
}
