import React from "react";
import Thumbnail from "@/components/ui/Thumbnail";
import Heading from "@/components/ui/Heading";
import TabBar from "@/components/ui/TabBar";
import * as HiIcons from "react-icons/hi";
import { Link, useParams, Outlet } from "react-router-dom";
import { quizzes } from "@/data/fakeQuizzes";
import { quizStatus } from "@/data/quizStatus";

export default function QuizPage() {
  const { id } = useParams();

  const quiz = quizzes.find((quiz) => quiz.id === id);

  return (
    <>
      <div className="flex flex-col gap-4">
        <Link
          to="./.."
          className="flex w-fit items-center gap-2 text-gray-500 hover:text-gray-800"
        >
          <HiIcons.HiOutlineArrowLeft className="w-4 h-4" />
          Back to Quizzes
        </Link>
        <div className="flex gap-4">
          <Thumbnail size="md" url={quiz.thumbnail} />
          <div className="flex flex-col gap-2">
            <Heading>{quiz.name}</Heading>
            <span className="text-gray-500">
              {quiz.isPublic ? quizStatus.PUBLIC : quizStatus.DRAFT}
            </span>
          </div>
        </div>
      </div>
      <TabBar>
        <TabBar.Tab path="overview">Overview</TabBar.Tab>
        <TabBar.Tab path="questions">Questions</TabBar.Tab>
        <TabBar.Tab path="settings">Settings</TabBar.Tab>
      </TabBar>
      <Outlet />
    </>
  );
}
