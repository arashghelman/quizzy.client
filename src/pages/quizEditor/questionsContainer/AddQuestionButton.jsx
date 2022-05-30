import React from "react";
import Button from "@/components/Button";
import AddIcon from "remixicon-react/AddLineIcon";

export default function AddQuestionButton() {
  return (
    <Button variant="text-sky-base hover:text-sky-base/70">
      <AddIcon className="w-sm" />
      New Question
    </Button>
  );
}
