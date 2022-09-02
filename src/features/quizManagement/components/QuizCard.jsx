import React from "react";
import ActionsMenu from "@/components/ui/ActionsMenu";
import MenuItem from "@/components/ui/MenuItem";
import Thumbnail from "@/components/ui/Thumbnail";
import { quizStatus } from "@/data/quizStatus";
import { Link, useNavigate } from "react-router-dom";
import { itemType } from "@/components/data/menuItemType";

export default function QuizCard({ data: { id, name, status, thumbnail } }) {
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
          <span className="text-gray-500">{quizStatus[status].name}</span>
        </div>
      </div>
      <span className="text-gray-500">Created 2 days ago</span>
      <ActionsMenu>
        <MenuItem type={itemType.LINK} path={`${id}/overview`}>
          Overview
        </MenuItem>
        <MenuItem type={itemType.LINK} path={`${id}/questions`}>
          Questions
        </MenuItem>
        <MenuItem type={itemType.LINK} path={`${id}/settings`}>
          Settings
        </MenuItem>
      </ActionsMenu>
    </div>
  );
}
