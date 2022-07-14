import React from "react";

export default function CustomIcon({ size = "base", bgColor, render }) {
  const sizeConfig = {
    base: { iconSize: "w-7", width: "w-12", height: "h-12" },
    sm: { iconSize: "w-4", width: "w-7", height: "h-7" },
  };

  const { iconSize, width, height } = sizeConfig[size];

  return (
    <div
      className={`${bgColor} ${width} ${height} 
      flex justify-center items-center rounded text-gray-base`}
    >
      {render(iconSize)}
    </div>
  );
}
