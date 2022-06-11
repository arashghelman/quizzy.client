import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDragLayer } from "react-dnd";
import { questionType } from "@/constants/questionType";
import { useContainer } from "./questionsContainer/useContainer";
import QuestionCardMultipleChoice from "./questionsContainer/QuestionCardMultipleChoice";
import QuestionCardPoll from "./questionsContainer/QuestionCardPoll";
import DragDropBar from "./questionsContainer/DragDropBar";
import ContainerToggleCollapseButton from "./questionsContainer/ContainerToggleCollapseButton";
import QuestionAddButton from "./questionsContainer/QuestionAddButton";
import QuestionTypeMenu from "./questionsContainer/QuestionTypeMenu";

export default function QuestionsContainer({ questions }) {
  const {
    items,
    setIsItemCollapsed,
    setAreItemsCollapsed,
    moveItem,
    revertReorder,
  } = useContainer(questions);

  const areItemsCollapsed = items.every((itm) => itm.isCollapsed);

  const { isDragging } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
  }));

  const [isShowingBar, setIsShowingBar] = useState(false);

  useEffect(() => isDragging && setIsShowingBar(true), [isDragging]);

  const handleCancelReorder = () => {
    revertReorder();
    setIsShowingBar(false);
  };

  const handleSaveReorder = () => setIsShowingBar(false);

  const [isShowingTypeMenu, setIsShowingTypeMenu] = useState(false);

  const questionCards = items.map((itm, index) => {
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
        return <QuestionCardMultipleChoice {...props} />;

      case questionType.POLL:
        return <QuestionCardPoll {...props} />;

      default:
        throw new Error("No component was found for the type");
    }
  });

  return (
    <>
      <div className="flex flex-col w-full pb-16">
        <div className="flex gap-base self-end mb-tight relative">
          <div>
            <QuestionAddButton
              onClick={() => setIsShowingTypeMenu((prev) => !prev)}
            />
            {isShowingTypeMenu && <QuestionTypeMenu />}
          </div>
          <ContainerToggleCollapseButton
            label={areItemsCollapsed ? "Expand All" : "Collapse All"}
            onClick={() => setAreItemsCollapsed(!areItemsCollapsed)}
          />
        </div>
        <div role="list" className="flex flex-col gap-base w-full">
          {questionCards}
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
