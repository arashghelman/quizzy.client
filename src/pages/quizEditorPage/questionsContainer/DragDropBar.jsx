import React from "react";
import Button from "@/components/Button";

export default function DragDropBar({ onCancel, onSave }) {
  return (
    <div
      className="z-10 flex justify-between items-center w-full -translate-x-1/2 left-1/2
        border-t-1 border-blue-light-1 px-8 py-5 fixed bottom-0 bg-blue-light-2"
    >
      <span className="text-gray-base font-semibold text-lg">
        Drag questions to reorder.
      </span>
      <div className="flex gap-3">
        <Button
          variant="px-1 text-red-base font-semibold hover:text-red-base/70"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="px-1 text-sky-base font-semibold hover:text-sky-base/70"
          onClick={onSave}
        >
          Save changes
        </Button>
      </div>
    </div>
  );
}
