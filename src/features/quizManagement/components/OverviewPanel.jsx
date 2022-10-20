import { quizzes } from "@/data/fakeQuizzes";
import { quizStatus } from "@/data/quizStatus";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Thumbnail from "@/components/ui/Thumbnail";

export default function OverviewPanel() {
  const { id } = useParams();
  const quiz = quizzes.find((quiz) => quiz.id === id);

  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <div className="flex gap-4">
          <Thumbnail size="lg" url={quiz.thumbnail} />
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-800 font-bold text-xl">{quiz.name}</h3>
            <div className="flex flex-col gap-2">
              <span className="text-gray-800 font-semibold">Subjects</span>
              <span className="text-gray-500">
                {quiz.subjects.map((sub) => sub.name).join(", ")}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-800 font-semibold">Status</span>
              <span className="text-gray-500">
                {quiz.isPublic ? quizStatus.PUBLIC : quizStatus.DRAFT}
              </span>
            </div>
          </div>
        </div>
        <div className="w-fit">
          <Button
            variant="ButtonContained"
            onClick={() => navigate("../settings")}
          >
            Edit info
          </Button>
        </div>
      </div>
      <hr />
    </>
  );
}
