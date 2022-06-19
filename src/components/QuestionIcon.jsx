import React from "react";
import PropTypes from "prop-types";
import MultipleChoiceIcon from "remixicon-react/CheckboxMultipleLineIcon";
import PollIcon from "remixicon-react/ChatPollLineIcon";
import { questionType } from "@/constants/questionType";

export default function QuestionIcon({ type, size = "base" }) {
  const sizeConfig = {
    base: { iconSize: "w-base", width: "w-12", height: "h-12" },
    sm: { iconSize: "w-xs", width: "w-7", height: "h-7" },
  };

  const { iconSize, width, height } = sizeConfig[size];

  const typeConfig = (() => {
    switch (type) {
      case questionType.MULTIPLE_CHOICE:
        return {
          icon: <MultipleChoiceIcon className={iconSize} />,
          color: "bg-amber-base",
        };

      case questionType.POLL:
        return {
          icon: <PollIcon className={iconSize} />,
          color: "bg-blue-base",
        };

      default:
        throw new Error("No match was found for the type");
    }
  })();

  return (
    <div
      className={`${typeConfig.color} ${width} ${height}
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
