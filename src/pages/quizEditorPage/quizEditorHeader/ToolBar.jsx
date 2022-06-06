import React from "react";
import EditIcon from "remixicon-react/PencilLineIcon";
import SettingsIcon from "remixicon-react/Settings5LineIcon";
import Button from "@/components/Button";

export default function ToolBar() {
  const buttonVariant =
    "justify-center text-gray-light-2 hover:text-gray-light-2/70";

  return (
    <div className="flex gap-extra-loose border-t-1 border-b-1 px-base py-5">
      <Button variant={buttonVariant}>
        <>
          <EditIcon className="w-sm" />
          Edit
        </>
      </Button>
      <Button variant={buttonVariant}>
        <>
          <SettingsIcon className="w-sm" />
          Settings
        </>
      </Button>
    </div>
  );
}
