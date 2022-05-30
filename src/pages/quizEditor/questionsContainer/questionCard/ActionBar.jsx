import React from "react";
import CardButton from "./CardButton";
import EditIcon from "remixicon-react/PencilLineIcon";
import DuplicateIcon from "remixicon-react/FileCopyLineIcon";
import DeleteIcon from "remixicon-react/DeleteBinLineIcon";

export default function ActionBar({ buttons }) {
  return (
    <div className="flex gap-2">
      {buttons}
      <CardButton icon={<DeleteIcon className="w-sm" />} />
      <CardButton icon={<DuplicateIcon className="w-sm" />} />
      <CardButton icon={<EditIcon className="w-sm" />} />
    </div>
  );
}
