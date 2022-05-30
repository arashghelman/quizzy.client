import React, { useState, useEffect } from "react";
import { pollResult } from "@/utils/fakeData";
import QuestionCard from "./QuestionCard";
import Option from "./questionCard/Option";
import ResultBar from "./pollCard/ResultBar";
import ActionButton from "./questionCard/ActionButton";
import PollIcon from "remixicon-react/ChatPollLineIcon";
import ShowIcon from "remixicon-react/EyeLineIcon";
import HideIcon from "remixicon-react/EyeOffLineIcon";

export default function PollCard({ data: { id, title, number, options } }) {
  const [isShowingResult, setIsShowingResult] = useState(false);
  const [pollOptions, setPollOptions] = useState([]);

  useEffect(() => setPollOptions(options), []);

  const handleToggleShowResult = () => {
    setIsShowingResult((prev) => !prev);
    const updatedOptions = pollOptions.map((opt) => ({
      ...opt,
      result: pollResult.find((res) => res.id === opt.id)?.result,
    }));

    setPollOptions(updatedOptions);
  };

  const optionsList = pollOptions.map((opt) => (
    <div key={opt.id} className="flex flex-col gap-1">
      <Option color="bg-blue-400">{opt.value}</Option>
      {isShowingResult && (
        <div className="ml-6">
          <ResultBar value={opt.result} />
        </div>
      )}
    </div>
  ));

  return (
    <QuestionCard
      config={{
        icon: <PollIcon className="w-base" />,
        color: "bg-blue-200",
        actions: (
          <ActionButton
            icon={
              isShowingResult ? (
                <HideIcon className="w-sm" />
              ) : (
                <ShowIcon className="w-sm" />
              )
            }
            onClick={handleToggleShowResult}
          />
        ),
      }}
      data={{ title, number, optionsList }}
    />
  );
}
