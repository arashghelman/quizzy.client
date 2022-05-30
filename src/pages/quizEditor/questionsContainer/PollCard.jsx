import React from "react";
import { usePollResults } from "./pollCard/usePollResults";
import QuestionCard from "./QuestionCard";
import Option from "./questionCard/Option";
import ResultsBar from "./pollCard/ResultsBar";
import CardButton from "./questionCard/CardButton";
import PollIcon from "remixicon-react/ChatPollLineIcon";
import ShowIcon from "remixicon-react/EyeLineIcon";
import HideIcon from "remixicon-react/EyeOffLineIcon";

export default function PollCard({
  data: { id, options, ...rest },
  onSetCollapse,
  ...props
}) {
  const { pollOptions, isShowingResults, showResults, hideResults } =
    usePollResults(id, options);

  const optionsElement = pollOptions.map((opt) => (
    <div key={opt.id} className="flex flex-col gap-1">
      <Option color="bg-blue-400">{opt.value}</Option>
      {isShowingResults && (
        <div className="ml-6">
          <ResultsBar value={opt.result} />
        </div>
      )}
    </div>
  ));

  const handleShowResults = () => {
    showResults();
    onSetCollapse(false);
  };

  const buttons = isShowingResults ? (
    <CardButton icon={<HideIcon className="w-sm" onClick={hideResults} />} />
  ) : (
    <CardButton
      icon={<ShowIcon className="w-sm" onClick={handleShowResults} />}
    />
  );

  const handleSetCollapse = (isCollapsed) => {
    hideResults();
    onSetCollapse(isCollapsed);
  };

  return (
    <QuestionCard
      config={{
        icon: <PollIcon className="w-base" />,
        color: "bg-blue-base",
        buttons,
      }}
      data={{ id, optionsElement, ...rest }}
      onSetCollapse={handleSetCollapse}
      {...props}
    />
  );
}