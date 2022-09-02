import React from "react";
import QuestionCardMultipleChoice from "./QuestionCardMultipleChoice";
import QuestionCardPoll from "./QuestionCardPoll";
import { questionType } from "@/data/questionType";
import { useParams } from "react-router-dom";
import { quizzes } from "@/data/fakeQuizzes";
import Button from "@/components/ui/Button";
import * as RiIcons from "react-icons/ri";
import Modal from "@/components/ui/Modal";
import QuestionForm from "./QuestionForm";

export default function QuestionsPanel() {
  const { id } = useParams();
  const questions = quizzes.find((quiz) => quiz.id === id)?.questions;

  const questionsList = questions?.map((question, index) => {
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

  const modalRef = React.useRef();

  return (
    <>
      {questions.length === 0 ? (
        <div className="bg-gray-100 rounded flex flex-col items-center gap-2 py-6">
          <p className="text-gray-500">
            {"You haven't created any questions yet."}
          </p>
          <Button
            variant="contained"
            onClick={() => modalRef.current?.showModal()}
          >
            <RiIcons.RiAddFill />
            Create your first question
          </Button>
        </div>
      ) : (
        <>
          <div className="self-end">
            <Button
              variant="ButtonContained"
              onClick={() => modalRef.current?.showModal()}
            >
              <RiIcons.RiAddFill />
              <span className="mr-1">Create Question</span>
            </Button>
          </div>
          <div className="grid">{questionsList}</div>
        </>
      )}
      <Modal ref={modalRef} heading="New Question">
        <QuestionForm />
      </Modal>
    </>
  );
}
