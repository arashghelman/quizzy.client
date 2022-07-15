import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDragLayer } from "react-dnd";
import { questionType } from "@/constants/questionType";
import { useContainer } from "./questionsContainer/useContainer";
import QuestionCardMultipleChoice from "./questionsContainer/QuestionCardMultipleChoice";
import QuestionCardPoll from "./questionsContainer/QuestionCardPoll";
import DragDropBar from "./questionsContainer/DragDropBar";
import Button from "@/components/ui/Button";
import AddIcon from "remixicon-react/AddLineIcon";

export default function QuestionsContainer({ questions, onClickAddQuestion }) {
  const {
    items,
    setIsItemCollapsed,
    setAreItemsCollapsed,
    moveItem,
    revertReorder,
  } = useContainer(questions);

  const areItemsCollapsed = items.every((itm) => itm.isCollapsed);

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

  const { isDragging } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
  }));

  const [isDragBarOpen, setIsDragBarOpen] = useState(false);

  useEffect(() => isDragging && setIsDragBarOpen(true), [isDragging]);

  return (
    <>
      <div className="flex flex-col w-full pb-16">
        <div className="flex gap-3 self-end mb-2 relative">
          <div>
            <Button
              variant="gap-1 text-sky-base hover:text-sky-base/70"
              onClick={onClickAddQuestion}
            >
              <AddIcon className="w-4" />
              Add Question
            </Button>
          </div>
          <Button
            variant="text-sky-base hover:text-sky-base/70"
            onClick={() => setAreItemsCollapsed(!areItemsCollapsed)}
          >
            {areItemsCollapsed ? "Expand All" : "Collapse All"}
          </Button>
        </div>
        <div role="list" className="flex flex-col gap-4 w-full">
          {questionCards}
        </div>
      </div>
      {isDragBarOpen && (
        <DragDropBar
          onSave={() => setIsDragBarOpen(false)}
          onCancel={() => {
            revertReorder();
            setIsDragBarOpen(false);
          }}
        />
      )}
    </>
  );
}

QuestionsContainer.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
