import React from "react";
import QuestionTypeDropDownMenu from "./questionEditorForm/QuestionTypeDropDownMenu";
import FormInputTextArea from "./questionEditorForm/FormInputTextArea";
import OptionInputGroup from "./questionEditorForm/OptionInputGroup";
import Button from "@/components/Button";
import BlankSpaceIcon from "remixicon-react/SpaceIcon";
import SaveIcon from "remixicon-react/Save2FillIcon";

export default function QuestionEditorForm() {
  return (
    <form
      className="w-full px-[200px] flex flex-col gap-base 
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="self-end">
        <QuestionTypeDropDownMenu />
      </div>
      <div className="flex flex-col rounded gap-base border-1 p-base bg-white">
        <div className="relative">
          <Button
            variant="absolute right-0 bg-black/40 hover:bg-black/50 
            text-white p-tight px-base rounded"
            onMouseDown={(event) => event.preventDefault()}
          >
            <BlankSpaceIcon />
            Insert blank space
          </Button>
          <FormInputTextArea placeholder="Type your question here..." />
        </div>
        <div className="grid grid-cols-4 gap-tight w-full">
          <OptionInputGroup bgColor="bg-amber-base" />
          <OptionInputGroup bgColor="bg-blue-base" />
          <OptionInputGroup bgColor="bg-emerald-light-2" />
          {/* consider color */}
          <OptionInputGroup bgColor="bg-rose-200" />
        </div>
      </div>
      <div className="flex justify-end gap-base">
        <Button
          variant="bg-black/40 hover:bg-black/50 text-white 
          font-semibold px-base py-tight rounded"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="text-gray-base hover:text-gray-base/70
          font-semibold border-1 bg-white px-base py-tight rounded"
        >
          <SaveIcon className="w-sm" />
          Save
        </Button>
      </div>
    </form>
  );
}
