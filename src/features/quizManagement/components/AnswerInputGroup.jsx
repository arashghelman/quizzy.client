import React from "react";
import InputGroup from "@/components/form/InputGroup";
import Button from "@/components/ui/Button";
import * as HiIcons from "react-icons/hi";

export default function AnswerInputGroup({
  label,
  inputText,
  inputRadio,
  onDelete,
}) {
  return (
    <InputGroup>
      <div className="flex items-center justify-between">
        {label}
        <div className="flex items-center gap-2">
          {inputRadio}
          <Button variant="basic" onClick={onDelete}>
            <HiIcons.HiTrash className="text-red-500 w-5 h-5" />
          </Button>
        </div>
      </div>
      {inputText}
    </InputGroup>
  );
}
