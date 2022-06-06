import React from "react";

export default function Chapter({ number, total }) {
  return (
    <span className="text-gray-base font-semibold">
      Chapter {number} of {total}
    </span>
  );
}
