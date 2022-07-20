import React from "react";
import QuestionCard from "./QuestionCard";
import * as FaIcons from "react-icons/fa";
import AnswerItem from "./AnswerItem";
import * as TbIcons from "react-icons/tb";
import MenuItem from "@/components/ui/MenuItem";
import * as HiIcons from "react-icons/hi";
import PollItem from "./PollItem";

export default function QuestionCardPoll() {
  return (
    <QuestionCard
      icon={<FaIcons.FaPoll />}
      actions={
        <>
          <MenuItem>
            <HiIcons.HiEye />
            Show results
          </MenuItem>
        </>
      }
      answersList={
        // <ul className="grid grid-cols-2 gap-4">
        //   <AnswerItem
        //     label="Yes"
        //     icon={<TbIcons.TbQuestionMark />}
        //     textColor="text-blue-500"
        //     bgColor="bg-blue-100"
        //   />
        //   <AnswerItem
        //     label="No"
        //     icon={<TbIcons.TbQuestionMark />}
        //     textColor="text-blue-500"
        //     bgColor="bg-blue-100"
        //   />
        // </ul>
        <ul className="grid gap-4">
          <PollItem label="Yes" value={60} />
          <PollItem label="No" value={40} />
        </ul>
      }
    />
  );
}
