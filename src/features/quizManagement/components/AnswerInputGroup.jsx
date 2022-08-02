import React from "react";
import InputGroup from "@/components/form/InputGroup";
import Label from "@/components/form/Label";
import InputText from "@/components/form/InputText";
import InputSelect from "@/components/form/InputSelect";
import Button from "@/components/ui/Button";
import * as HiIcons from "react-icons/hi";

export default function AnswerInputGroup({ label }) {
  return (
    <InputGroup>
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <div className="flex items-center gap-2">
          <InputSelect type="radio" />
          <Button variant="basic">
            <HiIcons.HiTrash className="text-red-500 w-5 h-5" />
          </Button>
        </div>
      </div>
      <InputText placeholder="Type an answer here..." />
    </InputGroup>
  );
}
