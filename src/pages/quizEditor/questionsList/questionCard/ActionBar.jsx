import React from "react";
import ActionButton from "./ActionButton";
import EditIcon from "remixicon-react/PencilLineIcon";
import DuplicateIcon from "remixicon-react/FileCopyLineIcon";
import DeleteIcon from "remixicon-react/DeleteBinLineIcon";

export default function ActionBar({ actions }) {
  return (
    <div className="flex gap-2">
      {actions}
      <ActionButton icon={<DeleteIcon className="w-sm" />} />
      <ActionButton icon={<DuplicateIcon className="w-sm" />} />
      <ActionButton icon={<EditIcon className="w-sm" />} />
    </div>
  );
}
