import React, { useState } from "react";
import MoveIcon from "remixicon-react/DragMove2LineIcon";
import ConfirmIcon from "remixicon-react/CheckLineIcon";
import UndoIcon from "remixicon-react/ArrowGoBackLineIcon";

export default function MoveBar({ color }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleHover = () => setIsHovered((current) => !current);

  return (
    <div
      onMouseEnter={handleToggleHover}
      onMouseLeave={handleToggleHover}
      className={`${color} text-primary grid col-span-3 justify-center items-center rounded-l-lg 
      w-2 ${isHovered && "w-10"} 
      transform duration-200`}
    >
      {isHovered && (
        <>
          {/* <ConfirmIcon cursor="pointer" className="w-base" /> */}
          <MoveIcon cursor="move" className="w-base" />
          {/* <UndoIcon cursor="pointer" className="w-base" /> */}
        </>
      )}
    </div>
  );
}
