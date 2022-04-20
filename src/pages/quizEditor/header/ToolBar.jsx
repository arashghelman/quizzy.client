import React from "react";
import EditIcon from "remixicon-react/PencilLineIcon";
import SettingsIcon from "remixicon-react/Settings5LineIcon";
import Button from "@/components/Button";

export default function ToolBar() {
  const buttonVariant = "font-nunito text-gray-500 hover:text-gray-400";

  return (
    <div className="flex gap-7 border-t-1 border-b-1 py-5">
      <Button variant={buttonVariant}>
        <>
          <EditIcon size="1.1rem" />
          Edit
        </>
      </Button>
      <Button variant={buttonVariant}>
        <>
          <SettingsIcon size="1.1rem" />
          Settings
        </>
      </Button>
    </div>
  );
}
