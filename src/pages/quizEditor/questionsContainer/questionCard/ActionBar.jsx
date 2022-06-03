import React from "react";
import CardButton from "./CardButton";
import EditIcon from "remixicon-react/PencilLineIcon";
import DuplicateIcon from "remixicon-react/FileCopyLineIcon";
import DeleteIcon from "remixicon-react/DeleteBinLineIcon";

export default function ActionBar({ buttons }) {
  return (
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
  );
}
