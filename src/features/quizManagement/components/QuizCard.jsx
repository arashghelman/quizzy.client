import React from "react";
import Menu from "@/components/ui/Menu";
import Thumbnail from "@/components/ui/Thumbnail";
import { quizStatus } from "@/data/quizStatus";
import { Link, useNavigate } from "react-router-dom";

export default function QuizCard({ data: { id, name, isPublic, thumbnail } }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`${id}/overview`)}
      className="relative flex justify-between items-center cursor-pointer hover:bg-gray-100 border-b-1 p-4"
    >
      <div className="flex gap-4">
        <Thumbnail url={thumbnail} />
        <div className="flex flex-col gap-2">
          <Link
            to={`${id}/overview`}
            className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
          >
            {name}
          </Link>
          <span className="text-gray-500">
            {isPublic ? quizStatus.PUBLIC : quizStatus.DRAFT}
          </span>
        </div>
      </div>
      <span className="text-gray-500">Created 2 days ago</span>
      <Menu>
        <Menu.LinkItem path={`${id}/overview`}>Overview</Menu.LinkItem>
        <Menu.LinkItem path={`${id}/questions`}>Questions</Menu.LinkItem>
        <Menu.LinkItem path={`${id}/settings`}>Settings</Menu.LinkItem>
      </Menu>
    </div>
  );
}
