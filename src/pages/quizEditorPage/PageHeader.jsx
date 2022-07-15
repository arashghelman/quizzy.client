import React from "react";
import Thumbnail from "./pageHeader/Thumbnail";
import SubjectTag from "./pageHeader/SubjectTag";
import StatusLabel from "./pageHeader/StatusLabel";
import EditIcon from "remixicon-react/PencilLineIcon";
import SettingsIcon from "remixicon-react/Settings5LineIcon";
import Button from "@/components/ui/Button";

export default function PageHeader({
  data: { name, status, description, thumbnailUrl },
  onClickEdit,
  onClickSettings,
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between gap-5 w-full">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <h1 className="font-bold text-3xl text-gray-base">{name}</h1>
              <div>
                <StatusLabel label={status.type} />
              </div>
            </div>
          </div>
          <p className="w-full text-gray-base leading-8">{description}</p>
          <div className="flex gap-2">
            <SubjectTag label="English" />
            <SubjectTag label="Fun" />
            <SubjectTag label="World Languages" />
          </div>
        </div>
        <div className="self-center">
          <Thumbnail url={thumbnailUrl} onClick={onClickSettings} />
        </div>
      </div>
      <div className="flex gap-6 border-t-1 border-b-1 px-2 py-5">
        <Button
          variant="text-gray-light-2 hover:text-gray-light-2/70"
          onClick={onClickEdit}
        >
          <EditIcon className="w-5" />
          Edit
        </Button>
        <Button
          variant="text-gray-light-2 hover:text-gray-light-2/70"
          onClick={onClickSettings}
        >
          <SettingsIcon className="w-5" />
          Settings
        </Button>
      </div>
    </div>
  );
}
