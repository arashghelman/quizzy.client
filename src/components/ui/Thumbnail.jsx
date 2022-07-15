import React from "react";

export default function Thumbnail({ url }) {
  return (
    <div className="flex rounded w-11 h-11 overflow-hidden">
      <img src={url} alt="thumbnail" className="object-cover" />
    </div>
  );
}
