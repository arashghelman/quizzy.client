import React from "react";
import { useDragDrop } from "./questionCard/useDragDrop";
import CardHeader from "./questionCard/CardHeader";
import CardMoveBar from "./questionCard/CardMoveBar";
import CardButton from "./questionCard/CardButton";
import EditIcon from "remixicon-react/PencilLineIcon";
import DuplicateIcon from "remixicon-react/FileCopyLineIcon";
import DeleteIcon from "remixicon-react/DeleteBinLineIcon";
import CollapseIcon from "remixicon-react/ArrowUpSLineIcon";
import ExpandIcon from "remixicon-react/ArrowDownSLineIcon";
import Button from "@/components/ui/Button";

export default function QuestionCard({
  data: { id, title, index },
  barColor,
  icon,
  buttons,
  optionsList,
  isCollapsed,
  onSetCollapse,
  onMove,
}) {
  const { ref, isDragging, canDrag, toggleCanDrag } = useDragDrop(
    { id, index },
    onMove
  );

  return (
    <div
      ref={ref}
      onDragStart={() => canDrag && onSetCollapse(true)}
      className={`flex ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <CardMoveBar
        cursor={isDragging ? "cursor-grabbing" : "cursor-grab"}
        color={barColor}
        isHovered={canDrag}
        onHover={toggleCanDrag}
      />
      <div className="border-t-1 border-b-1 border-r-1 rounded-r-lg w-full bg-white">
        <div className="flex flex-col gap-5 p-5 pl-8">
          <div className="flex justify-between items-start">
            <CardHeader icon={icon} data={{ title, number: ++index }} />
            {!isDragging && (
              <div className="flex gap-2">
                {buttons}
                <CardButton
                  title="Delete this question"
                  icon={<DeleteIcon className="w-[1.2rem]" />}
                />
                <CardButton
                  title="Duplicate this question"
                  icon={<DuplicateIcon className="w-[1.2rem]" />}
                />
                <CardButton
                  title="Edit this question"
                  icon={<EditIcon className="w-[1.2rem]" />}
                />
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div role="list" className="grid grid-cols-2 gap-4">
              {optionsList}
            </div>
          )}
        </div>
        <Button
          onClick={() => onSetCollapse(!isCollapsed)}
          variant={`w-full flex justify-center py-1 text-gray-400 hover:bg-gray-100 ${
            isDragging ? "invisible" : "visible"
          }`}
        >
          {isCollapsed ? (
            <ExpandIcon className="w-6" />
          ) : (
            <CollapseIcon className="w-6" />
          )}
        </Button>
      </div>
    </div>
  );
}
