import React from "react";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import QuizCard from "./QuizCard";
import NewQuizForm from "./NewQuizForm";
import AddIcon from "remixicon-react/AddLineIcon";

export default function QuizzesPage() {
  const modalRef = React.useRef();
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <Heading>Quizzes</Heading>
          <Button
            variant="contained"
            onClick={() => modalRef.current?.showModal()}
          >
            <AddIcon className="w-4" />
            <span className="mr-1">Create Quiz</span>
          </Button>
        </div>
        <p className="text-gray-500">
          Define quizzes that other players can take part in.
        </p>
      </div>
      <div className="grid">
        <QuizCard />
        <QuizCard />
      </div>
      <Modal ref={modalRef} heading="New quiz">
        <NewQuizForm />
      </Modal>
    </>
  );
}
