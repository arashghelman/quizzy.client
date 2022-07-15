import React from "react";
import Button from "@/components/ui/Button";
import CloseIcon from "remixicon-react/CloseFillIcon";

export default function Modal({ width, heading, onClickClose, children }) {
  return (
    <div className="h-full w-full fixed top-0 bottom-0 left-0 right-0 bg-gray-base/50">
      <div
        className={`flex flex-col bg-white rounded border-1 p-loose gap-loose 
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${width}`}
      >
        <div className="flex justify-between">
          <h1 className="text-xl text-gray-base font-semibold">{heading}</h1>
          <Button variant="group" onClick={onClickClose}>
            <CloseIcon className="text-gray-light-1 group-hover:text-gray-light-1/80" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
