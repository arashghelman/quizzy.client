import React from "react";
import Button from "@/components/Button";
import QuestionIcon from "@/components/QuestionIcon";

export default function SelectTypeButton({ type, label }) {
  return (
    <Button
      variant="p-base font-semibold w-full justify-between items-center 
      border-b-1 last:border-b-0 hover:bg-gray-light-3"
    >
      {label}
      <QuestionIcon type={type} size="sm" />
    </Button>
  );
}
