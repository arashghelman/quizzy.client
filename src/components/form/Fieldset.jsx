import React from "react";

export default function Fieldset({ legend, children }) {
  return (
    <fieldset className="grid grid-cols-2">
      <div>
        <legend className="text-gray-800 font-semibold text-lg">
          {legend}
        </legend>
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </fieldset>
  );
}
