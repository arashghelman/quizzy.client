import React from "react";
import QuestionCard from "./QuestionCard";
import * as FaIcons from "react-icons/fa";
import AnswerItem from "./AnswerItem";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";

export default function QuestionCardMultipleChoice() {
  return (
    <QuestionCard
      icon={<FaIcons.FaCheck />}
      answersList={
        <ul className="grid grid-cols-2 gap-4">
          <AnswerItem
            label="A"
            icon={<BsIcons.BsCheck />}
            textColor="text-emerald-500"
            bgColor="bg-emerald-100"
          />
          <AnswerItem
            label="B"
            icon={<IoIcons.IoIosClose />}
            textColor="text-red-500"
            bgColor="bg-red-100"
          />
          <AnswerItem
            label="C"
            icon={<IoIcons.IoIosClose />}
            textColor="text-red-500"
            bgColor="bg-red-100"
          />
          <AnswerItem
            label="D"
            icon={<IoIcons.IoIosClose />}
            textColor="text-red-500"
            bgColor="bg-red-100"
          />
        </ul>
      }
    />
  );
}
