import React from "react";

export default function Thumbnail({ url }) {
  return (
    <img
      src={url}
      alt="Thumbnail"
      className="w-[500px] h-[170px] object-cover"
    />
  );
}
