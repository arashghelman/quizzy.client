import React from "react";
import AddIcon from "remixicon-react/AddLineIcon";
import Button from "@/components/Button";

export default function QuestionAddButton({ onClick }) {
  return (
    <Button variant="text-sky-base hover:text-sky-base/70" onClick={onClick}>
      <AddIcon className="w-sm" />
      Add Question
    </Button>
  );
}
