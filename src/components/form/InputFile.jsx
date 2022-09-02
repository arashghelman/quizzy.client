import React from "react";
import * as FiIcons from "react-icons/fi";

export default function InputFile({ id }) {
  return (
    <div
      className="relative overflow-hidden rounded flex flex-col justify-center items-center bg-gray-100
    border-1 border-gray-300 text-gray-500 border-dashed gap-6 h-48"
    >
      <FiIcons.FiUploadCloud className="w-12 h-12 text-gray-500" />
      <p>
        Drag and drop or{" "}
        <label
          htmlFor={id}
          className="text-blue-500 font-semibold cursor-pointer hover:underline"
        >
          browse
        </label>{" "}
        your files
      </p>
      <input type="file" id={id} className="absolute hidden" />
    </div>
  );
}
