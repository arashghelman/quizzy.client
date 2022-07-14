import React from "react";
import { getQuestionConfig } from "@/utils/getQuestionConfig";
import { questionType } from "@/constants/questionType";
import { useResults } from "./questionCardPoll/useResults";
import QuestionCard from "./QuestionCard";
import OptionLabel from "./questionCard/OptionLabel";
import ResultsBar from "./questionCardPoll/ResultsBar";
import CardButton from "./questionCard/CardButton";
import ShowIcon from "remixicon-react/EyeLineIcon";
import HideIcon from "remixicon-react/EyeOffLineIcon";

export default function QuestionCardPoll({
  data: { options, ...rest },
  onSetCollapse,
  ...props
}) {
  const { pollOptions, isShowingResults, showResults, hideResults } =
    useResults(options);

  function handleShowResults() {
    showResults();
    onSetCollapse(false);
  }

  const buttons = isShowingResults ? (
    <CardButton
      title="Hide results"
      icon={<HideIcon className="w-[1.2rem]" onClick={hideResults} />}
    />
  ) : (
    <CardButton
      title="Show results"
      icon={<ShowIcon className="w-[1.2rem]" onClick={handleShowResults} />}
    />
  );

  const { Icon, color } = getQuestionConfig(questionType.POLL);

  function handleSetCollapse(isCollapsed) {
    hideResults();
    onSetCollapse(isCollapsed);
  }

  return (
    <QuestionCard
      data={{ ...rest }}
      icon={<Icon />}
      barColor={color}
      buttons={buttons}
      optionsList={pollOptions.map((opt) => (
        <div key={opt.id} className="flex flex-col gap-extra-tight">
          <OptionLabel color="bg-blue-400" label={opt.value} />
          {isShowingResults && (
            <div className="ml-6">
              <ResultsBar value={opt.result} />
            </div>
          )}
        </div>
      ))}
      onSetCollapse={handleSetCollapse}
      {...props}
    />
  );
}
