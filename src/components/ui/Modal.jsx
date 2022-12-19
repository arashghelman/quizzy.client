import React from "react";
import Button from "./Button";
import * as CgIcons from "react-icons/cg";

const Modal = React.forwardRef(function Modal(
  { heading, width = "w-[584px]", children },
  ref
) {
  return (
    <dialog ref={ref} className="p-6 bg-white rounded">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-gray-800 text-2xl font-bold">{heading}</h1>
        <Button
          variant="text-gray-800 bg-gray-100 hover:bg-gray-300 rounded-full p-2"
          onClick={() => ref.current?.close()}
        >
          <CgIcons.CgClose className="w-4 h-4" />
        </Button>
      </div>
      <div className={`max-w-full ${width}`}>{children}</div>
    </dialog>
  );
});

export default Modal;
