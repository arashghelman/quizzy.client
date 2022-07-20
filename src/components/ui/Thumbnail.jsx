import React from "react";

export default function Thumbnail({ size = "sm", url }) {
  const sizeConfig = {
    sm: "w-11 h-11",
    md: "w-14 h-14",
  };
  return (
    <div className={`flex rounded overflow-hidden ${sizeConfig[size]}`}>
      <img src={url} alt="thumbnail" className="object-cover" />
    </div>
  );
}
