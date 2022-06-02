import React from "react";
import MultipleChoiceIcon from "remixicon-react/CheckboxMultipleLineIcon";
import PollIcon from "remixicon-react/ChatPollLineIcon";
import { questionType } from "@/constants/questionType";

export default function QuestionIcon({ type, size = "w-base" }) {
  let config = {
    icon: null,
    color: "",
  };

  switch (type) {
    case questionType.MULTIPLE_CHOICE:
      config = {
        icon: <MultipleChoiceIcon className={size} />,
        color: "bg-amber-base",
      };
      break;

    case questionType.POLL:
      config = {
        icon: <PollIcon className={size} />,
        color: "bg-blue-base",
      };
      break;

    default:
      throw new Error("No match was found for the type.");
  }
  return (
    <div
      className={`${config.color} flex justify-center items-center rounded w-6 h-6 text-gray-base`}
    >
      {config.icon}
    </div>
  );
}
