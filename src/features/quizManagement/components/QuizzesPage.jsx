import React from "react";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import QuizCard from "./QuizCard";
import QuizForm from "./QuizForm";
import * as RiIcons from "react-icons/ri";
import { quizzes } from "@/data/fakeQuizzes";

export default function QuizzesPage() {
  const modalRef = React.useRef();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <Heading>Quizzes</Heading>
          <Button
            variant="ButtonContained"
            onClick={() => modalRef.current?.showModal()}
          >
            <RiIcons.RiAddFill />
            <span className="mr-1">Create Quiz</span>
          </Button>
        </div>
        <p className="text-gray-500">
          Define quizzes that other players can take part in.
        </p>
      </div>
      <div className="grid">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} data={quiz} />
        ))}
      </div>
      <Modal ref={modalRef} heading="New quiz">
        <QuizForm />
      </Modal>
    </>
  );
}
