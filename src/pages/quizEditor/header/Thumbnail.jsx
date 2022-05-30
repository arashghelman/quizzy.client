import React from "react";

export default function Thumbnail({ url }) {
  return (
    <img
      src={url}
      alt="Thumbnail"
      className="rounded-md border-1 w-[270px] h-[170px] object-cover"
    />
  );
}
