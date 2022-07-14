import React, { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { quiz, quizState, questions } from "@/utils/fakeData";
import PageHeader from "./quizEditorPage/PageHeader";
import QuestionsContainer from "./quizEditorPage/QuestionsContainer";
import ScoreCard from "./quizEditorPage/ScoreCard";
import Modal from "@/components/Modal";
import QuizFormEdit from "./quizEditorPage/QuizFormEdit";
import QuizFormSettings from "./quizEditorPage/QuizFormSettings";
import QuestionEditorForm from "./quizEditorPage/QuestionEditorForm";

export default function QuizEditorPage() {
  const [modal, setModal] = useState({
    isOpen: false,
    heading: "",
    content: null,
  });

  const handleCloseModal = () => {
    setModal({ isOpen: false, heading: "", content: null });
  };

  const [isQuestionEditorOpen, setIsQuestionEditorOpen] = useState(false);

  return (
    <div className="flex flex-col gap-7">
      <PageHeader
        data={quiz}
        onClickEdit={() => {
          setModal({
            isOpen: true,
            heading: "Edit quiz",
            content: <QuizFormEdit onClickCancel={handleCloseModal} />,
          });
        }}
        onClickSettings={() => {
          setModal({
            isOpen: true,
            heading: "Quiz settings",
            content: <QuizFormSettings onClickCancel={handleCloseModal} />,
          });
        }}
      />
      <div className="flex gap-5">
        <DndProvider backend={HTML5Backend}>
          <QuestionsContainer
            questions={questions}
            onClickAddQuestion={() => setIsQuestionEditorOpen(true)}
          />
        </DndProvider>
        <div className="w-1/3">
          <ScoreCard quizState={quizState} />
        </div>
      </div>
      {modal.isOpen && (
        <Modal
          heading={modal.heading}
          width="w-[35%]"
          onClickClose={handleCloseModal}
        >
          {modal.content}
        </Modal>
      )}
      <QuestionEditorForm
        isOpen={isQuestionEditorOpen}
        onClickCancel={() => setIsQuestionEditorOpen(false)}
      />
    </div>
  );
}
