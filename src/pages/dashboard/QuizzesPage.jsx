import React from "react";
import Heading from "./Heading";
import Button from "@/components/Button";
import QuizRow from "./quizzesPage/QuizRow";
import AddIcon from "remixicon-react/AddLineIcon";
import Paragraph from "./Paragraph";

export default function QuizzesPage() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <Heading>Quizzes</Heading>
          <Button variant="blue" customStyle="gap-2 pr-4">
            <AddIcon className="w-4" />
            Create Quiz
          </Button>
        </div>
        <Paragraph>
          Define quizzes that other players can take part in.
        </Paragraph>
      </div>
      <div className="grid">
        <QuizRow />
        <QuizRow />
      </div>
    </>
  );
}
