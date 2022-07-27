import React from "react";
import QuestionCard from "./QuestionCard";
import * as FaIcons from "react-icons/fa";
import AnswerItem from "./AnswerItem";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";

export default function QuestionCardMultipleChoice({
  data: { answers, ...rest },
}) {
  return (
    <QuestionCard
      data={{ ...rest }}
      icon={<FaIcons.FaCheck />}
      answersList={answers.map((answer) => (
        <AnswerItem
          key={answer.id}
          label={answer.value}
          icon={answer.isCorrect ? <BsIcons.BsCheck /> : <IoIcons.IoIosClose />}
          textColor={answer.isCorrect ? "text-emerald-500" : "text-red-500"}
          bgColor={answer.isCorrect ? "bg-emerald-100" : "bg-red-100"}
        />
      ))}
    />
  );
}
