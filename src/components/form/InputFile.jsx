import React from "react";
import * as FiIcons from "react-icons/fi";

export default function InputFile() {
  const ref = React.useRef();
  return (
    <div
      className="relative overflow-hidden rounded flex flex-col justify-center items-center bg-gray-100
    border-1 border-gray-300 text-gray-800 border-dashed gap-4"
    >
      <FiIcons.FiDownload className="w-8 h-8 text-gray-500" />
      <p>
        <span
          onClick={() => ref.current?.click()}
          className="font-semibold cursor-pointer hover:underline"
        >
          Choose a file
        </span>{" "}
        or drag it here.
      </p>
      <input ref={ref} type="file" className="absolute hidden" />
    </div>
  );
}
