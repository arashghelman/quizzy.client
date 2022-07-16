import React from "react";
import Button from "./Button";
import * as CgIcons from "react-icons/cg";

const Modal = React.forwardRef(function Modal({ heading, children }, ref) {
  return (
    <dialog ref={ref} className="p-10 bg-white rounded">
      <div className="flex items-center justify-between mb-7">
        <h1 className="text-gray-800 text-2xl font-bold">{heading}</h1>
        <Button variant="modal-close" onClick={() => ref.current?.close()}>
          <CgIcons.CgClose />
        </Button>
      </div>
      {children}
    </dialog>
  );
});

export default Modal;
