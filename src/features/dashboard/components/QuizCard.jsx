import React from "react";
import ActionsIcon from "remixicon-react/MoreFillIcon";
import Thumbnail from "@/components/ui/Thumbnail";
import Button from "@/components/ui/Button";

export default function QuizCard() {
  return (
    <div className="relative flex justify-between items-center cursor-pointer hover:bg-gray-100 border-b-1 border-gray-300 p-4">
      <div className="flex gap-4">
        <Thumbnail url="https://corridorchapter.nl/wp-content/uploads/2020/05/quiz.jpg" />
        <div className="flex flex-col gap-1">
          <a className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
            English Test
          </a>
          <span className="text-gray-500">Public</span>
        </div>
      </div>
      <Button variant="primary" customStyle="w-8 h-8">
        <ActionsIcon className="w-4" />
      </Button>
    </div>
  );
}
