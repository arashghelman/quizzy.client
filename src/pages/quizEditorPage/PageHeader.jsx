import React from "react";
import Heading from "../../components/Heading";
import QuizThumbnail from "./pageHeader/QuizThumbnail";
import QuizSubjectTag from "./pageHeader/QuizSubjectTag";
import QuizStatusLabel from "./pageHeader/QuizStatusLabel";
import EditIcon from "remixicon-react/PencilLineIcon";
import SettingsIcon from "remixicon-react/Settings5LineIcon";
import Button from "@/components/Button";

export default function PageHeader({
  data: { name, status, description, thumbnailUrl },
}) {
  return (
    <div className="flex flex-col gap-extra-loose">
      <div className="flex justify-between gap-loose px-base w-full">
        <div className="flex flex-col gap-loose w-full">
          <div className="flex flex-col gap-base">
            <div className="flex items-center gap-loose">
              <Heading text={name} />
              <div>
                <QuizStatusLabel label={status.type} />
              </div>
            </div>
            <span className="text-gray-base font-semibold">Chapter 1 of 2</span>
          </div>
          <p className="w-full text-gray-base leading-8">{description}</p>
          <div className="flex gap-tight">
            <QuizSubjectTag label="English" />
            <QuizSubjectTag label="Fun" />
            <QuizSubjectTag label="World Languages" />
          </div>
        </div>
        <div className="self-center">
          <QuizThumbnail url={thumbnailUrl} />
        </div>
      </div>
      <div className="flex gap-extra-loose border-t-1 border-b-1 px-base py-5">
        <Button variant="text-gray-light-2 hover:text-gray-light-2/70">
          <EditIcon className="w-sm" />
          Edit
        </Button>
        <Button variant="text-gray-light-2 hover:text-gray-light-2/70">
          <SettingsIcon className="w-sm" />
          Settings
        </Button>
      </div>
    </div>
  );
}
