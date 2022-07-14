import React from "react";
import QuizForm from "./QuizForm";
import ThumbnailInputFile from "./quizFormSettings/ThumbnailInputFile";
import DropdownMenu from "@/components/DropdownMenu";
import { useDropdownMenu } from "@/hooks/useDropdownMenu";

export default function QuizFormSettings({ onClickCancel }) {
  const { menuItems, selectItem } = useDropdownMenu([
    { id: "1", content: "Public, visible to everyone", isDefault: true },
    { id: "2", content: "Draft, visible to you" },
  ]);
  return (
    <QuizForm onClickCancel={onClickCancel}>
      <div className="flex flex-col gap-tight">
        <span className="text-gray-light-1">Add a thumbnail</span>
        <ThumbnailInputFile />
      </div>
      <div className="flex flex-col gap-tight">
        <span className="text-gray-light-1">Who can see this quiz?</span>
        <DropdownMenu items={menuItems} onSelectItem={selectItem} />
      </div>
    </QuizForm>
  );
}
