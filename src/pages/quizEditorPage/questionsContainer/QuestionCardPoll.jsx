import React from "react";
import { questionType } from "@/constants/questionType";
import { usePollResults } from "./questionCardPoll/usePollResults";
import QuestionCard from "./QuestionCard";
import OptionLabel from "./questionCard/OptionLabel";
import PollResultsBar from "./questionCardPoll/PollResultsBar";
import CardButton from "./questionCard/CardButton";
import QuestionIcon from "@/components/QuestionIcon";
import ShowIcon from "remixicon-react/EyeLineIcon";
import HideIcon from "remixicon-react/EyeOffLineIcon";

export default function QuestionCardPoll({
  data: { options, ...rest },
  onSetCollapse,
  ...props
}) {
  const { pollOptions, isShowingResults, showResults, hideResults } =
    usePollResults(options);

  const handleShowResults = () => {
    showResults();
    onSetCollapse(false);
  };

  const buttons = isShowingResults ? (
    <CardButton
      title="Hide results"
      icon={<HideIcon className="w-sm" onClick={hideResults} />}
    />
  ) : (
    <CardButton
      title="Show results"
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
        icon: <QuestionIcon type={questionType.POLL} />,
        color: "bg-blue-base",
        buttons,
      }}
      data={{ ...rest }}
      optionsList={pollOptions.map((opt) => (
        <div key={opt.id} className="flex flex-col gap-extra-tight">
          <OptionLabel color="bg-blue-400" label={opt.value} />
          {isShowingResults && (
            <div className="ml-6">
              <PollResultsBar value={opt.result} />
            </div>
          )}
        </div>
      ))}
      onSetCollapse={handleSetCollapse}
      {...props}
    />
  );
}
