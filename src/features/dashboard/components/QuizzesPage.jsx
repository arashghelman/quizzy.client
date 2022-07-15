import React from "react";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import QuizCard from "./QuizCard";
import AddIcon from "remixicon-react/AddLineIcon";

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
        <p className="text-gray-500">
          Define quizzes that other players can take part in.
        </p>
      </div>
      <div className="grid">
        <QuizCard />
        <QuizCard />
      </div>
    </>
  );
}
