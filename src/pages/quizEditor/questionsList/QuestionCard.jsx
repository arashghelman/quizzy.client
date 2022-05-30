import React, { useState } from "react";
import Header from "./questionCard/Header";
import ActionButton from "./questionCard/ActionButton";
import CollapseButton from "./questionCard/CollapseButton";
import EditIcon from "remixicon-react/PencilLineIcon";
import DuplicateIcon from "remixicon-react/FileCopyLineIcon";
import DeleteIcon from "remixicon-react/DeleteBinLineIcon";
import MoveBar from "./questionCard/MoveBar";

export default function QuestionCard({
  config: { color, icon, actions },
  data: { id, title, number, optionsList },
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <div className="flex">
      <MoveBar color={color} />
      <div className="border-t-1 border-b-1 border-r-1 rounded-r-lg left-2 w-full">
        <div className="flex flex-col gap-5 px-6 py-4">
          <div className="flex justify-between items-start">
            <Header icon={icon} color={color} data={{ title, number }} />
            <div className="flex gap-2">
              {actions}
              <ActionButton icon={<DeleteIcon className="w-sm" />} />
              <ActionButton icon={<DuplicateIcon className="w-sm" />} />
              <ActionButton icon={<EditIcon className="w-sm" />} />
            </div>
          </div>
          {!isCollapsed && (
            <ul className="flex flex-col gap-3">{optionsList}</ul>
          )}
        </div>
        <CollapseButton isCollapsed={isCollapsed} onCollapse={handleCollapse} />
      </div>
    </div>
  );
}
