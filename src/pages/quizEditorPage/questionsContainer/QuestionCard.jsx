import React from "react";
import { useDragDrop } from "./questionCard/useDragDrop";
import CardHeader from "./questionCard/CardHeader";
import CardMoveBar from "./questionCard/CardMoveBar";
import CardButton from "./questionCard/CardButton";
import EditIcon from "remixicon-react/PencilLineIcon";
import DuplicateIcon from "remixicon-react/FileCopyLineIcon";
import DeleteIcon from "remixicon-react/DeleteBinLineIcon";
import CardToggleCollapseButton from "./questionCard/CardToggleCollapseButton";

export default function QuestionCard({
  config: { color, icon, buttons },
  data: { id, title, index },
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
        color={color}
        isHovered={canDrag}
        onHover={toggleCanDrag}
      />
      <div className="border-t-1 border-b-1 border-r-1 rounded-r-lg left-tight w-full bg-white">
        <div className="flex flex-col gap-loose p-loose pl-extra-loose">
          <div className="flex justify-between items-start">
            <CardHeader icon={icon} data={{ title, number: ++index }} />
            {!isDragging && (
              <div className="flex gap-2">
                {buttons}
                <CardButton
                  title="Delete this question"
                  icon={<DeleteIcon className="w-sm" />}
                />
                <CardButton
                  title="Duplicate this question"
                  icon={<DuplicateIcon className="w-sm" />}
                />
                <CardButton
                  title="Edit this question"
                  icon={<EditIcon className="w-sm" />}
                />
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div role="list" className="flex flex-col gap-base">
              {optionsList}
            </div>
          )}
        </div>
        <div className={isDragging ? "invisible" : "visible"}>
          <CardToggleCollapseButton
            isCollapsed={isCollapsed}
            onClick={() => onSetCollapse(!isCollapsed)}
          />
        </div>
      </div>
    </div>
  );
}
