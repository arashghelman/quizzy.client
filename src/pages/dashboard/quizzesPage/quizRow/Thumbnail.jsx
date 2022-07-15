import React from "react";

export default function Thumbnail({ url }) {
  return (
    <div className="flex rounded w-12 h-12 overflow-hidden">
      <img src={url} alt="thumbnail" className="object-cover" />
    </div>
  );
}
