import React from "react";
import Button from "@/components/ui/Button";

export default function QuizForm({ onClickCancel, children }) {
  return (
    <form className="flex flex-col gap-5">
      {children}
      <div className="self-end flex gap-2">
        <Button
          variant="bg-gray-light-3 hover:bg-gray-200 
            px-4 py-2 rounded text-gray-light-1"
          onClick={onClickCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="bg-emerald-light-1 hover:bg-emerald-light-1/80 text-white 
            font-semibold px-4 py-2 rounded"
        >
          Save
        </Button>
      </div>
    </form>
  );
}
