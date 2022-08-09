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

  const modalRef = React.useRef();

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

  return (
    <>
      <div className="self-end">
        <Button
          variant="contained"
          onClick={() => modalRef.current?.showModal()}
        >
          <RiIcons.RiAddFill />
          <span className="mr-1">Create Question</span>
        </Button>
      </div>
      <div className="grid">{questionsList}</div>
      <Modal ref={modalRef} heading="New Question">
        <QuestionForm />
      </Modal>
    </>
  );
}
