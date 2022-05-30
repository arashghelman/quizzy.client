import React from "react";
import Button from "@/components/Button";
import MoveIcon from "remixicon-react/DragMove2LineIcon";

export default function MoveBar({ cursor, color, isHovered, onHover }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      className={`${color} text-gray-base grid col-span-3 justify-center items-center rounded-l-lg 
      w-2 hover:w-10
      transform duration-200`}
    >
      {isHovered && (
        <>
          <Button variant={`h-full ${cursor}`}>
            <MoveIcon className="w-base" />
          </Button>
        </>
      )}
    </div>
  );
}
