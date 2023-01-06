import React from "react";
import InputGroup from "@/components/form/InputGroup";
import Label from "@/components/form/Label";
import InputCheck from "@/components/form/InputCheck";
import InputText from "@/components/form/InputText";
import Button from "@/components/ui/Button";
import * as FaIcons from "react-icons/fa";

export default function AnswerInputGroup({
  index,
  value,
  isRemoveDisabled,
  register,
  onIsTrueChange,
  onRemoveClick,
}) {
  return (
    <InputGroup>
      <div className="flex items-center justify-between gap-2">
        <Label id={`answers[${index}].value`}>{`Answer ${index + 1}`}</Label>
        <div className="flex gap-2">
          <InputCheck
            type="radio"
            name="answers"
            value={value}
            onChange={onIsTrueChange}
          />
          <Button
            variant="hover:opacity-70"
            onClick={onRemoveClick}
            disabled={isRemoveDisabled}
          >
            <FaIcons.FaTrashAlt className="text-red-500 w-4 h-4" />
          </Button>
        </div>
      </div>
      <InputText
        id={`answers[${index}].value`}
        placeholder="Type your answer here..."
        register={() => register(`answers[${index}].value`)}
      />
    </InputGroup>
  );
}
