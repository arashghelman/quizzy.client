import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDragLayer } from "react-dnd";
import { questionType } from "@/constants/enums";
import { useContainer } from "./questionsContainer/useContainer";
import MultipleChoiceCard from "./questionsContainer/MultipleChoiceCard";
import PollCard from "./questionsContainer/PollCard";
import DragDropBar from "./questionsContainer/DragDropBar";
import CollapseAllButton from "./questionsContainer/CollapseAllButton";
import AddQuestionButton from "./questionsContainer/AddQuestionButton";

export default function QuestionsContainer({ questions }) {
  const [
    items,
    setIsItemCollapsed,
    setAreItemsCollapsed,
    moveItem,
    revertReorder,
  ] = useContainer(questions);

  const { isDragging } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
  }));

  const [isShowingBar, setIsShowingBar] = useState(false);

  useEffect(() => isDragging && setIsShowingBar(true), [isDragging]);

  const questionsList = items.map((itm, index) => {
    const { id, title, type, options, isCollapsed } = itm;

    const props = {
      key: id,
      data: { id, index, title, options },
      isCollapsed,
      onSetCollapse: (isCollapsed) => setIsItemCollapsed(id, isCollapsed),
      onMove: moveItem,
    };

    switch (type) {
      case questionType.MULTIPLE_CHOICE:
        return <MultipleChoiceCard {...props} />;

      case questionType.POLL:
        return <PollCard {...props} />;

      default:
        throw new Error("No component was found for the type");
    }
  });

  const areItemsCollapsed = items.every((itm) => itm.isCollapsed);

  const handleCancelReorder = () => {
    revertReorder();
    setIsShowingBar(false);
  };

  const handleSaveReorder = () => {
    setIsShowingBar(false);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex gap-base self-end mr-2 mb-2">
          <AddQuestionButton />
          <CollapseAllButton
            label={areItemsCollapsed ? "Expand All" : "Collapse All"}
            onClick={() => setAreItemsCollapsed(!areItemsCollapsed)}
          />
        </div>
        <div role="list" className="flex flex-col gap-base w-full pb-16">
          {questionsList}
        </div>
      </div>
      {isShowingBar && (
        <DragDropBar
          onSave={handleSaveReorder}
          onCancel={handleCancelReorder}
        />
      )}
    </>
  );
}

QuestionsContainer.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
