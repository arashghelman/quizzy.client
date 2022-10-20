import React from "react";
import QuestionCard from "./QuestionCard";
import * as FaIcons from "react-icons/fa";
import AnswerItem from "./AnswerItem";
import * as TbIcons from "react-icons/tb";
import MenuItem from "@/components/ui/MenuItem";
import { menuItemType } from "@/components/data/menuItemType";

export default function QuestionCardPoll({ data: { answers, ...rest } }) {
  return (
    <QuestionCard
      data={{ ...rest }}
      icon={<FaIcons.FaPoll className="w-6 h-6" />}
      actions={
        <>
          <MenuItem type={menuItemType.BUTTON}>
            <FaIcons.FaEye />
            Show results
          </MenuItem>
        </>
      }
      answersList={answers.map((answer) => (
        <AnswerItem
          key={answer.id}
          label={answer.value}
          icon={<TbIcons.TbQuestionMark />}
          textColor="text-blue-500"
          bgColor="bg-blue-100"
        />
      ))}
    />
  );
}
