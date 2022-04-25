import React from "react";
import QuestionCard from "./QuestionCard";
import Option from "./questionCard/Option";
import PercentageBar from "./pollCard/PercentageBar";
import ActionButton from "./questionCard/ActionButton";
import PollIcon from "remixicon-react/ChatPollLineIcon";
import ShowIcon from "remixicon-react/EyeLineIcon";

export default function PollCard({ data: { title, number, options } }) {
  const optionsList = options.map((opt) => (
    <div className="flex flex-col gap-1">
      <Option color="bg-blue-400">{opt.value}</Option>
      <div className="ml-6">
        <PercentageBar value="1" />
      </div>
    </div>
  ));

  return (
    <QuestionCard
      config={{
        icon: <PollIcon className="w-base" />,
        color: "bg-blue-200",
        actions: <ActionButton icon={<ShowIcon className="w-sm" />} />,
      }}
      data={{ title, number, optionsList }}
    />
  );
}
