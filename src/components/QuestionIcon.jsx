import React from "react";
import PropTypes from "prop-types";
import MultipleChoiceIcon from "remixicon-react/CheckboxMultipleLineIcon";
import PollIcon from "remixicon-react/ChatPollLineIcon";
import { questionType } from "@/constants/questionType";

export default function QuestionIcon({ type, size = "base" }) {
  let sizeConfig = {
    iconSize: "",
    width: "",
    height: "",
  };
  switch (size) {
    case "base":
      sizeConfig = { iconSize: "w-base", width: "w-12", height: "h-12" };
      break;

    case "sm":
      sizeConfig = { iconSize: "w-xs", width: "w-7", height: "h-7" };
      break;

    default:
      break;
  }

  let typeConfig = {
    icon: null,
    color: "",
  };
  switch (type) {
    case questionType.MULTIPLE_CHOICE:
      typeConfig = {
        icon: <MultipleChoiceIcon className={sizeConfig.iconSize} />,
        color: "bg-amber-base",
      };
      break;

    case questionType.POLL:
      typeConfig = {
        icon: <PollIcon className={sizeConfig.iconSize} />,
        color: "bg-blue-base",
      };
      break;

    default:
      throw new Error("No match was found for the type.");
  }

  return (
    <div
      className={`${typeConfig.color} ${sizeConfig.width} ${sizeConfig.height}
        flex justify-center items-center rounded text-gray-base`}
    >
      {typeConfig.icon}
    </div>
  );
}

QuestionIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(questionType)),
  size: PropTypes.oneOf(["base", "sm"]),
};
