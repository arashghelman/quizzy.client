import React from "react";
import { questionType } from "@/constants/questionType";
import CustomIcon from "@/components/CustomIcon";
import MultipleChoiceIcon from "remixicon-react/CheckboxMultipleLineIcon";
import PollIcon from "remixicon-react/ChatPollLineIcon";

export function getQuestionConfig(type) {
  const config = (() => {
    switch (type) {
      case questionType.MULTIPLE_CHOICE:
        return {
          Icon: ({ size }) => (
            <CustomIcon
              size={size}
              bgColor="bg-amber-base"
              render={(iconSize) => <MultipleChoiceIcon className={iconSize} />}
            />
          ),
          color: "bg-amber-base",
          label: "Multiple-choice",
        };

      case questionType.POLL:
        return {
          Icon: ({ size }) => (
            <CustomIcon
              size={size}
              bgColor="bg-blue-base"
              render={(iconSize) => <PollIcon className={iconSize} />}
            />
          ),
          color: "bg-blue-base",
          label: "Poll",
        };

      default:
        throw new Error("No match was found for the type");
    }
  })();

  return { ...config };
}
