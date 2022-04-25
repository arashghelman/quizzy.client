import React, { useState } from "react";
import MoveIcon from "remixicon-react/DragMove2LineIcon";
import ConfirmIcon from "remixicon-react/CheckLineIcon";
import UndoIcon from "remixicon-react/ArrowGoBackLineIcon";

export default function MoveBar({ color }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered((current) => !current);

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`${color} text-primary flex flex-col justify-center gap-12 items-center rounded-l-lg w-2 hover:w-10 transform duration-200`}
    >
      {isHovered && (
        <>
          {/* <ConfirmIcon size={iconSize} cursor="pointer" /> */}
          <MoveIcon cursor="move" className="w-base" />
          {/* <UndoIcon size={iconSize} cursor="pointer" /> */}
        </>
      )}
    </div>
  );
}
