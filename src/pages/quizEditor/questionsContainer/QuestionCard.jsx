import React from "react";
import { useDragDrop } from "./questionCard/useDragDrop";
import Header from "./questionCard/Header";
import MoveBar from "./questionCard/MoveBar";
import ActionBar from "./questionCard/ActionBar";
import CollapseButton from "./questionCard/CollapseButton";

export default function QuestionCard({
  config: { color, icon, buttons },
  data: { id, title, index, optionsElement },
  isCollapsed,
  onSetCollapse,
  onMove,
}) {
  const [ref, isDragging, isDraggable, toggleIsDraggable] = useDragDrop(
    { id, index },
    onMove
  );

  return (
    <div
      ref={ref}
      onDragStart={() => onSetCollapse(true)}
      className={`flex ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <MoveBar
        cursor={isDragging ? "cursor-grabbing" : "cursor-grab"}
        color={color}
        isHovered={isDraggable}
        onHover={toggleIsDraggable}
      />
      <div className="border-t-1 border-b-1 border-r-1 rounded-r-lg left-tight w-full bg-white">
        <div className="flex flex-col gap-loose p-loose pl-extra-loose">
          <div className="flex justify-between items-start">
            <Header
              icon={icon}
              color={color}
              data={{ title, number: ++index }}
            />
            {!isDragging && <ActionBar buttons={buttons} />}
          </div>
          {!isCollapsed && (
            <div role="list" className="flex flex-col gap-base">
              {optionsElement}
            </div>
          )}
        </div>
        <div className={isDragging ? "invisible" : "visible"}>
          <CollapseButton
            isCollapsed={isCollapsed}
            onClick={() => onSetCollapse(!isCollapsed)}
          />
        </div>
      </div>
    </div>
  );
}
