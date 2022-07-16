import React from "react";

export default function InputGroup({ label, element, helper }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-gray-800 font-semibold">{label}</label>
      {element}
      <p className="text-gray-500">{helper}</p>
    </div>
  );
}
