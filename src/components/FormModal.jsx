import React from "react";
import Button from "@/components/Button";
import Modal from "./Modal";

export default function FormModal({ heading, children }) {
  return (
    <Modal heading={heading} width="w-[36%]">
      <form className="flex flex-col gap-base">
        {children}
        <div className="self-end flex gap-base">
          <Button
            variant="bg-gray-light-3 hover:bg-gray-200 
            px-base py-tight rounded text-gray-light-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="bg-emerald-light-1 hover:bg-emerald-light-1/80 text-white 
            font-semibold px-base py-tight rounded"
          >
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
}
