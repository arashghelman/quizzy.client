import React from "react";
import { questionType } from "@/constants/questionType";
import { getQuestionConfig } from "@/utils/getQuestionConfig";
import TitleTextArea from "./questionEditorForm/TitleTextArea";
import OptionInputGroup from "./questionEditorForm/OptionInputGroup";
import Button from "@/components/ui/Button";
import BlankSpaceIcon from "remixicon-react/SpaceIcon";
import SaveIcon from "remixicon-react/Save2FillIcon";
import DropdownMenu from "@/components/DropdownMenu";
import { useDropdownMenu } from "@/hooks/useDropdownMenu";

export default function QuestionEditorForm({ isOpen, onClickCancel }) {
  const items = Object.entries(questionType).map(([, val]) => {
    const { Icon, label } = getQuestionConfig(val);
    return {
      id: val,
      content: (
        <div className="flex items-center gap-4">
          <Icon size="sm" />
          {label}
        </div>
      ),
      isDefault: questionType.MULTIPLE_CHOICE === val,
    };
  });

  const { menuItems, selectItem } = useDropdownMenu(items);

  return (
    <form
      className={`w-full h-full px-[200px] flex flex-col justify-center gap-4
      bg-[#7f7f7f] fixed transform transition-transform duration-500 top-1/2 left-1/2 -translate-x-1/2 ${
        isOpen ? "-translate-y-1/2" : "translate-y-full"
      }`}
    >
      <div className="w-1/4 self-end">
        <DropdownMenu size="sm" items={menuItems} onSelectItem={selectItem} />
      </div>
      <div className="flex flex-col rounded gap-4 border-1 p-5 bg-white">
        <div className="relative">
          <Button
            variant="absolute z-10 right-0 bg-black/40 hover:bg-black/50 
            text-white px-4 py-2 rounded"
            onMouseDown={(event) => event.preventDefault()}
          >
            <BlankSpaceIcon />
            Insert blank space
          </Button>
          <TitleTextArea placeholder="Type your question here..." />
        </div>
        <div className="grid grid-cols-4 gap-2 w-full">
          <OptionInputGroup bgColor="bg-amber-base" />
          <OptionInputGroup bgColor="bg-blue-base" />
          <OptionInputGroup bgColor="bg-emerald-light-2" />
          {/* consider color */}
          <OptionInputGroup bgColor="bg-rose-200" />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="bg-black/40 hover:bg-black/50 text-white 
          font-semibold px-4 py-2 rounded"
          onClick={onClickCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="text-gray-base hover:text-gray-base/70
          font-semibold border-1 bg-white px-4 py-2 rounded"
        >
          <SaveIcon className="w-4" />
          Save
        </Button>
      </div>
    </form>
  );
}
