import React from "react";
import Button from "@/components/Button";

export default function DragDropBar({ onSave, onCancel }) {
  return (
    <div
      className="z-10 flex justify-between w-full -translate-x-1/2 left-1/2
        border-t-1 border-blue-light-1 py-base px-8 pb-loose fixed bottom-0 bg-blue-light-2"
    >
      <span className="text-gray-base font-semibold text-lg">
        Drag questions to reorder.
      </span>
      <div className="flex gap-loose">
        <Button
          variant="text-red-base font-semibold hover:opacity-70"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="text-sky-base font-semibold hover:opacity-70"
          onClick={onSave}
        >
          Save changes
        </Button>
      </div>
    </div>
  );
}
